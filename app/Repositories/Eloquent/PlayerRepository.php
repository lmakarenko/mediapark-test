<?php

namespace App\Repositories\Eloquent;

use App\Criterias\OnlyOwnPlayerCriteria;
use App\Models\Player;
use App\Contracts\Repository\PlayerRepositoryContract;

class PlayerRepository extends CommonRepository implements PlayerRepositoryContract
{
    public function boot()
    {
        $this->pushCriteria(OnlyOwnPlayerCriteria::class);
    }

    public function model()
    {
        return Player::class;
    }

    public function getPlayerStatus($user_id)
    {
        return $this->find($user_id)->status;
    }

    protected function setPlayerStatus($user_id, $status)
    {
        return $this->update(['user_id' => $user_id, 'status' => $status], $user_id);
    }

    public function setPlayerStatusOffline($user_id)
    {
        return $this->setPlayerStatus($user_id, Player::STATUS_OFFLINE);
    }

    public function setPlayerStatusOnline($user_id)
    {
        return $this->setPlayerStatus($user_id, Player::STATUS_ONLINE);
    }

    public function setPlayerStatusSearch($user_id)
    {
        return $this->setPlayerStatus($user_id, Player::STATUS_SEARCH);
    }

    public function setPlayerStatusPlay($user_id)
    {
        return $this->setPlayerStatus($user_id, Player::STATUS_PLAY);
    }

    public function checkPlayerPlay($user_id)
    {
        $player = $this->find($user_id);
        return $player->status == Player::STATUS_PLAY;
    }

    public function checkPlayerOnline($user_id)
    {
        $player = $this->find($user_id);
        return $player->status == Player::STATUS_ONLINE;
    }
}
