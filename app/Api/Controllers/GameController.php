<?php

namespace App\Api\Controllers;

use App\Http\Requests\CreateGameRequest;
use App\Http\Requests\UpdateGameRequest;
use App\Services\Game\GameAdminService;

class GameController
{

    private $gameAdminService;

    public function __construct(
        GameAdminService $gameAdminService
    )
    {
        $this->gameAdminService = $gameAdminService;
    }

    /**
     * Список игр, с пагинацией
     *
     * @return mixed
     */
    public function index()
    {
        return response()->json($this->gameAdminService->gameList());
    }

    /**
     * Получение данных по конкретной игре
     *
     * @param $game
     * @return mixed
     */
    public function show($game)
    {
        return response()->json($this->gameAdminService->gameById($game));
    }

    /**
     * Сохранение данных новой игры
     *
     * @param CreateGameRequest $request
     * @return mixed
     */
    public function store(CreateGameRequest $request)
    {
        $validated = $request->validated();
        return response()->json($this->gameAdminService->createGame($validated));
    }

    public function update($id, UpdateGameRequest $request)
    {
        $validated = $request->validated();
        return response()->json($this->gameAdminService->editGame($id, $validated));
    }
}
