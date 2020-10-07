<?php

namespace App\Providers;

use Illuminate\Contracts\Routing\Registrar as RouteRegistrar;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /** @var string */
    protected $apiNamespace ='App\Api\Controllers';

    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map(RouteRegistrar $route)
    {
        $this->mapApiRoutes($route);

        $this->mapWebRoutes($route);
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes(RouteRegistrar $route)
    {
        $route->middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes(RouteRegistrar $route)
    {
        /*$route->prefix('api')
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));*/
        // Routes for API version 1
        Route::group([
            'middleware' => ['api', 'api_version:v1'],
            'namespace'  => "{$this->apiNamespace}\V1",
            'prefix'     => 'api/v1',
        ], function ($router) {
            require base_path('routes/api_v1.php');
        });
        // Routes for API version 2
        /*Route::group([
            'middleware' => ['api', 'api_version:v2'],
            'namespace'  => "{$this->apiNamespace}\V2",
            'prefix'     => 'api/v2',
        ], function ($router) {
            require base_path('routes/api_v2.php');
        });*/
    }
}
