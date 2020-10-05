<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Services\Loggers\ErrorLogger\ErrorLoggerContract as ErrorLogger;
use Illuminate\Container\Container as Application;

abstract class CommonRepository extends BaseRepository {

    private $errorLogger;

    protected $skipPresenter = true;

    public function __construct(Application $app, ErrorLogger $errorLogger)
    {
        $this->errorLogger = $errorLogger;
        parent::__construct($app);
    }
}
