<?php

namespace App\Services\Game;

//use Illuminate\Contracts\Routing\ResponseFactory as Response;
use App\Services\Loggers\ErrorLogger\ErrorLoggerContract as ErrorLogger;
use App\Contracts\Repository\GameRepositoryContract as GameRepository;
use App\Contracts\Repository\PlayerRepositoryContract as PlayerRepository;
use Illuminate\Support\Facades\DB;

class GamePlayerService
{
    //private $response;

    private $errorLogger;

    private $gameRepo;

    private $playerRepo;

    public function __construct(
        //Response $response,
        ErrorLogger $errorLogger,
        GameRepository $gameRepo,
        PlayerRepository $playerRepo
    ) {
        //$this->response = $response;
        $this->errorLogger = $errorLogger;
        $this->gameRepo = $gameRepo;
        $this->playerRepo = $playerRepo;
    }

    /**
     * Finds a game for a player
     *
     * @return mixed
     */
    public function findGame()
    {
        return $this->gameRepo->findNewGame();
    }

    /**
     * Returns player's profile data
     *
     * @param $user_id
     * @return mixed
     */
    public function getProfile($user_id)
    {
        return $this->playerRepo->find($user_id);
    }

    /**
     * Edits players profile data
     *
     * @param $data
     * @return mixed
     */
    public function editProfile($data)
    {
        try {
            return $this->playerRepo->update($data, $data['user_id']);
        }  catch(\Exception $ex) {
            $this->errorLogger->errorByException('Ошибка редактирования профиля игрока', $ex);
        }
        return ['message' => 'Ошибка редактирования профиля игрока'];
    }

    /**
     * PLayer joins a game
     *
     * @param $data
     * @return bool
     */
    public function joinGame($data)
    {
        $game_id = $data['game_id'];
        $user_id = $data['user_id'];
        try {
            // Проверка на наличие свободных мест
            $playersCount = $this->gameRepo->getPlayersCount($game_id);
            if($playersCount >= 5) {
                throw new \Exception('В игре нет свободных мест');
            }
            // Система проверяет статус игрока, если игрок находится в игре то вовзращается ошибка
            if($this->playerRepo->checkPlayerPlay($user_id)) {
                throw new \Exception('Игрок уже находится в игре');
            }
            DB::beginTransaction();
            // Система добавляет игрока в игру
            $this->gameRepo->addPlayerToGame($game_id, $user_id);
            // Система изменяет статус игрока: Игрок.Статус = В игре
            $this->playerRepo->setPlayerStatusOnline($user_id);
            // Система инкрементирует кол-во игроков в игре
            $this->gameRepo->incPlayersCount($game_id);
            DB::commit();
            return ['message' => 'Игрок успешно вошел в игру'];
        } catch(\Exception $ex) {
            DB::rollBack();
            $this->errorLogger->errorByException('Ошибка добавления игрока в игру', $ex);
        }
        return ['message' => 'Ошибка входа в игру'];
    }

    /**
     * Player cancels a game
     *
     * @param $data
     * @return bool|int
     */
    public function cancelGame($data)
    {
        $game = $this->gameRepo->find($data['game_id']);
        switch ((int)$game['status']) {
            case 1:
                // Игра. Статус = “Новая”:
                $result = $this->cancelGameNew($data);
                break;
            case 2:
                // Игра. Статус = “В процессе”
                $result = $this->cancelGameProcess($data);
                break;
            case 3:
                // Игра. Статус = “Редактируется”
                $result = $this->cancelGameEdit($data);
                break;
            default:
                // Неизвестный статус
                return $this->cancelErrorResponse('статус игры не позволяет удалить игрока');
                break;
        }
        return $result;
    }

    /**
     * Player cancel's game which status is Game::STATUS_NEW
     *
     * @param $data
     * @return bool
     */
    protected function cancelGameNew($data)
    {
        $game_id = $data['game_id'];
        $user_id = $data['user_id'];
        try {
            DB::beginTransaction();
            // Игрок удаляется из игры
            $this->gameRepo->removePlayerFromGame($game_id, $user_id);
            // Игрок помечается как “Оффлайн”
            $this->playerRepo->setPlayerStatusOffline($user_id);
            // Место в игре освобождается для подключения других игроков
            $this->gameRepo->decPlayersCount($game_id);
            DB::commit();
            return $this->cancelSuccessResponse();
        } catch(\Exception $ex) {
            DB::rollBack();
            $this->errorLogger->errorByException('Ошибка выхода игрока из игры (статус игры = новая)', $ex);
        }
        return $this->cancelErrorResponse();
    }

    /**
     * Player cancel's game which status is Game::STATUS_PROCESS
     *
     * @param $data
     * @return bool
     */
    protected function cancelGameProcess($data)
    {
        $game_id = $data['game_id'];
        $user_id = $data['user_id'];
        try {
            DB::beginTransaction();
            // Игрок помечается как “Оффлайн”
            $this->playerRepo->setPlayerStatusOffline($user_id);
            // Игрок автоматически перемещается на последнее место
            $this->gameRepo->setPlayerResult($game_id, $user_id, [
                'user_place' => 0
            ]);
            DB::commit();
            return $this->cancelSuccessResponse();
        } catch(\Exception $ex) {
            DB::rollBack();
            $this->errorLogger->errorByException('Ошибка выхода игрока из игры (статус игры = в процессе)', $ex);
        }
        return $this->cancelErrorResponse();
    }

    /**
     * Player cancel's game which status is Game::STATUS_EDIT
     *
     * @param $data
     * @return bool
     */
    protected function cancelGameEdit($data)
    {
        $game_id = $data['game_id'];
        $user_id = $data['user_id'];
        try {
            DB::beginTransaction();
            // Игрок помечается как “Оффлайн”
            $this->playerRepo->setPlayerStatusOffline($user_id);
            // Если место уже было установлено администратором - место сохраняется
            $playerStatus = $this->gameRepo->getPlayerResult($game_id, $user_id);
            if (null == $playerStatus) {
                //в противном случае игрок автоматически перемещается на последнее место
                $this->gameRepo->setPlayerResult($game_id, $user_id, [
                    'user_place' => 5
                ]);
            }
            DB::commit();
            return $this->cancelSuccessResponse();
        } catch(\Exception $ex) {
            DB::rollBack();
            $this->errorLogger->errorByException('Ошибка выхода игрока из игры (статус игры = редактируется)', $ex);
        }
        return $this->cancelErrorResponse();
    }

    protected function cancelErrorResponse($msg = null)
    {
        return [
            'message' => 'Ошибка выхода из игры' . ($msg ? ' : ' . $msg : '')
        ];
    }

    protected function cancelSuccessResponse($msg = null)
    {
        return [
            'message' => 'Игрок успешно вышел из игры' . ($msg ? ' : ' . $msg : '')
        ];
    }

}
