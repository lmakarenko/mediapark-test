<?php

namespace App\Repositories\Eloquent;

use App\Models\Game;
use App\Models\GameResult;
use App\Presenters\GamePresenter;
use App\Contracts\Repository\GameRepositoryContract;
use App\Criterias\NewGameCriteria;

class GameRepository extends BaseRepoWithSlugs implements GameRepositoryContract
{

    protected $skipPresenter = true;

    public function boot()
    {
    }

    public function model()
    {
        return Game::class;
    }

    public function presenter()
    {
        return GamePresenter::class;
    }

    /**
     * Finds new game for player
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Support\Collection|mixed
     */
    public function findNewGame()
    {
        $this->pushCriteria(NewGameCriteria::class);
        return $this->get();
    }
}
