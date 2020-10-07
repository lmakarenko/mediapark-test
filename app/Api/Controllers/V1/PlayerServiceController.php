<?php

namespace App\Api\Controllers;

use App\Http\Requests\PlayerCancelGameRequest;
use App\Http\Requests\PlayerJoinGameRequest;
use App\Http\Requests\PlayerEditProfileRequest;
use App\Services\Game\GamePlayerService;

class PlayerServiceController
{
    private $gamePlayerService;

    public function __construct(
        GamePlayerService $gamePlayerService
    ) {
        $this->gamePlayerService = $gamePlayerService;
    }

    /**
     * Получение данных профиля игрока
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getProfile($id)
    {
        return response()->json($this->gamePlayerService->getProfile($id));
    }

    /**
     * Редактирование данных профиля игрока
     *
     * @param PlayerEditProfileRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateProfile($id, PlayerEditProfileRequest $request)
    {
        $validated = $request->validated();
        return response()->json($this->gamePlayerService->editProfile($id, $validated));
    }

    /**
     * Игрок вступает в игру
     *
     * @param PlayerJoinGameRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function joinGame(PlayerJoinGameRequest $request)
    {
        $validated = $request->validated();
        return response()->json($this->gamePlayerService->joinGame($validated));
    }

    /**
     * Игрок выходит из игры
     *
     * @param PlayerCancelGameRequest $request
     */
    public function cancelGame(PlayerCancelGameRequest $request)
    {
        $validated = $request->validated();
        return response()->json($this->gamePlayerService->cancelGame($validated));
    }

    /**
     * Поиск новой игры для игрока
     *
     * @return mixed
     */
    public function findNewGame()
    {
        return response()->json($this->gamePlayerService->findGame());
    }
}
