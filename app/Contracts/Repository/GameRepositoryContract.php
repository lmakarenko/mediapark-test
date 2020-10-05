<?php

namespace App\Contracts\Repository;

use Prettus\Repository\Contracts\RepositoryInterface;

interface GameRepositoryContract extends RepositoryInterface
{
    public function findNewGame();

    public function setGameStatusNew($game_id);

    public function setGameStatusProcess($game_id);

    public function setGameStatusEdit($game_id);

    public function setGameStatusDone($game_id);

    public function setGameStatusError($game_id);

    public function setGameResults($game_id, $data);

    public function setPlayerResult($game_id, $user_id, $data);

    public function getPlayerResult($game_id, $user_id);

    public function addPlayerToGame($game_id, $user_id);

    public function removePlayerFromGame($game_id, $user_id);

    public function getPlayersCount($game_id);

    public function incPlayersCount($game_id, $by = 1);

    public function decPlayersCount($game_id, $by = 1);
}
