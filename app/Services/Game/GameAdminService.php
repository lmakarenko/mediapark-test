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
                    // Все участники игровой сессии получают сообщение об ошибке и покидают игровую комнату
                    $this->gameRepo->setGameStatusError($game_id);
                    // Все игроки получают +0 баллов
                    $results = $this->calcZeroRatings();
                    $this->gameRepo->setGameResults($game_id, $results);
                    DB::commit();
                    return true;
                } catch(\Exception $ex) {
                    $this->errorLogger->errorByException('Ошибка выхода администратора из игры', $ex);
                }
                break;
        }
        return false;
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
        $newData = [
            'user_id' => $data['user_id']
        ];
        try {
            return $this->gameRepo->create($newData);
        } catch(\Exception $ex) {
            $this->errorLogger->errorByException('Ошибка создания игры', $ex);
        }
        return false;
    }

    public function editGame($game_id, $data)
    {
        $newData = [
            'user_id' => $data['user_id']
        ];
        try {
            return $this->gameRepo->update($newData, $game_id);
        } catch(\Exception $ex) {
            $this->errorLogger->errorByException('Ошибка редактирования игры', $ex);
        }
        return false;
    }

    public function finishGame($game_id)
    {
        try {
            $this->gameRepo->setGameStatusDone($game_id);
            $this->calcRatings($game_id);
        } catch(\Exception $ex) {
            $this->errorLogger->errorByException('Ошибка завершения игры', $ex);
        }
    }
}
