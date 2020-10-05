<?php

namespace App\Criterias;

use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Contracts\CriteriaInterface;
use App\Models\Game;

class NewGameCriteria implements CriteriaInterface
{

    public function apply($model, RepositoryInterface $repository)
    {
        $model = $model->where([
                ['status', '=', Game::STATUS_NEW],
                ['num_players', '<', 5]
            ])
            ->orderBy('num_players', 'DESC')
            ->limit(1);
        return $model;
    }
}
