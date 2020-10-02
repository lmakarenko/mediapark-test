<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Contracts\Repository\GameRepositoryContract;

class GameController
{
    private $gameRepo;

    public function __construct(
        GameRepositoryContract $gameRepo
    )
    {
        $this->gameRepo = $gameRepo;
    }

    public function findNew()
    {
        return $this->gameRepo->findNewGame();
    }

    public function show($game)
    {
        //return csrf_token();
        return $this->gameRepo->find($game);
    }
}
