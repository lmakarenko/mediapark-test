<?php

namespace App\Contracts\Repository;

use Prettus\Repository\Contracts\RepositoryInterface;

interface PlayerRepositoryContract extends RepositoryInterface
{
    public function getPlayerStatus($user_id);

    public function setPlayerStatusOffline($user_id);

    public function setPlayerStatusOnline($user_id);

    public function setPlayerStatusSearch($user_id);

    public function setPlayerStatusPlay($user_id);

    public function checkPlayerOnline($user_id);
}
