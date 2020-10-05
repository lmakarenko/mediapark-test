<?php

namespace App\Criterias;

use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Contracts\CriteriaInterface;

class OnlyOwnPlayerCriteria implements CriteriaInterface
{
    private $auth;

    public function apply($model, RepositoryInterface $repository)
    {
        $this->auth = resolve('Illuminate\Contracts\Auth\Factory');
        // Если пользователь обычный игрок, а не администратор,
        // то он может работать только со своим обьектом из репозитория игроков
        if(!$this->auth->user()->tokenCan('manage-game')) {
            $model = $model->where('user_id', '=', $this->auth->user()->id);
        }
        return $model;
    }
}
