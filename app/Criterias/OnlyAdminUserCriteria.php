<?php

namespace App\Criterias;

use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Contracts\CriteriaInterface;

class OnlyAdminUserCriteria implements CriteriaInterface
{

    public function apply($model, RepositoryInterface $repository)
    {

        //$model = $model->where('id', '=', $this->auth->user()->id);
        $model = $model->has('');

        return $model;
    }
}
