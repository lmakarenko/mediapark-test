<?php

namespace App\Services\Game;

use Illuminate\Contracts\Routing\ResponseFactory as Response;
use App\Services\Loggers\ErrorLogger\ErrorLoggerContract as ErrorLogger;
use App\Contracts\Repository\GameRepositoryContract as GameRepository;
use Illuminate\Support\Facades\DB;

class GameAdminService
{
    private $response;

    private $errorLogger;

    private $gameRepo;

    public function __construct(
        Response $response,
        ErrorLogger $errorLogger,
        GameRepository $gameRepo
    ) {
        $this->response = $response;
        $this->errorLogger = $errorLogger;
        $this->gameRepo = $gameRepo;
    }

    public function gameList()
    {
        return $this->gameRepo->paginate();
    }

    public function gameById($game_id)
    {
        return $this->gameRepo->find($game_id);
    }

    public function cancelGame($game_id)
    {
        $game = $this->gameRepo->find($game_id);
        switch ($game->status) {
            case 1:
            case 2:
            case 3:
                try {
                    DB::beginTransaction();
                    // Игра. Статус принимает значения из {“Новая”,  “В процессе”, “Редактируется”}
                    // Игровая сессия завершается со статусом “Ошибка”.
                    $this->gameRepo->setGameStatusError($game_id);
                    // Все игроки получают +0 баллов
                    $this->gameRepo->setGameResults($game_id, $this->calcZeroRatings());
                    DB::commit();
                    return ['message' => 'Администратор успешно вышел из игры'];
                } catch(\Exception $ex) {
                    DB::rollBack();
                    $this->errorLogger->errorByException('Ошибка выхода администратора из игры', $ex);
                }
                break;
        }
        return ['message' => 'Ошибка выхода администратора из игры'];
    }

    protected function calcRatings($game_id)
    {
        //
    }

    protected function calcZeroRatings()
    {
        //
    }

    public function createGame($data)
    {
        try {
            return $this->gameRepo->create($data);
        } catch(\Exception $ex) {
            $this->errorLogger->errorByException('Ошибка создания игры', $ex);
        }
        return ['message' => 'Ошибка создания игры'];
    }

    public function updateGame($game_id, $data)
    {
        try {
            return $this->gameRepo->update($data, $game_id);
        } catch(\Exception $ex) {
            $this->errorLogger->errorByException('Ошибка редактирования игры', $ex);
        }
        return ['message' => 'Ошибка редактирования игры'];
    }

    public function updateGameResults($game_id, $data)
    {
        try {
            return $this->gameRepo->update($data, $game_id);
        } catch(\Exception $ex) {
            $this->errorLogger->errorByException('Ошибка редактирования результатов игры', $ex);
        }
        return ['message' => 'Ошибка редактирования результатов игры'];
    }

    public function finishGame($game_id)
    {
        try {
            DB::beginTransaction();
            $this->gameRepo->setGameStatusDone($game_id);
            $this->calcRatings($game_id);
            DB::commit();
        } catch(\Exception $ex) {
            DB::rollBack();
            $this->errorLogger->errorByException('Ошибка завершения игры', $ex);
        }
        return ['message' => 'Ошибка завершения игры'];
    }
}
