<?php

namespace App\Repositories\Eloquent;

use App\Models\User;
use App\Presenters\UserPresenter;
use App\Criterias\OnlyOwnUserCriteria;
use App\Contracts\Repository\UserRepositoryContract;

class UserRepository extends BaseRepoWithSlugs implements UserRepositoryContract
{
    private $auth;

    protected $skipPresenter = true;

    public function boot()
    {
        $this->auth = resolve('Illuminate\Contracts\Auth\Factory');

        $this->pushCriteria(OnlyOwnUserCriteria::class);
    }

    public function model()
    {
        return User::class;
    }

    public function presenter()
    {
        return UserPresenter::class;
    }

    public function currentUser()
    {
        return $this->find($this->auth->user()->id);
    }
}
