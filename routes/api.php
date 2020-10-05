<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/users/me', '\App\Api\Controllers\SessionController@currentUser');
    Route::get('/logout', '\App\Api\Controllers\SessionController@logout');

    Route::put('/users/{slug}/update-password', '\App\Api\Controllers\UserController@changePassword');

    /*Route::group(['middleware' => ['scope:manage-player']], function () {
        Route::apiResource('/players', '\App\Api\Controllers\PlayerController');
    });*/

    // Routes only for game managers (Admins)
    Route::group(['middleware' => ['scope:manage-game']], function () {
        // Api resources for admin CRUD operations (create / read / update / delete)
        // Games
        Route::apiResource('/games', '\App\Api\Controllers\GameController');
        // Players
        //Route::apiResource('/players', '\App\Api\Controllers\PlayerController');
        // Service actions
        // Admin cancels a game
        Route::post('/services/admin-service/cancel-game', '\App\Api\Controllers\AdminServiceController@cancelGame');
        // Admin finishes a game
        Route::post('/services/admin-service/finish-game', '\App\Api\Controllers\AdminServiceController@finishGame');
    });

    // Routes only for game players (Players)
    Route::group(['middleware' => ['scope:play-game']], function () {
        // Player's profile data
        Route::get('/players/{id}', '\App\Api\Controllers\PlayerServiceController@getProfile');
        // Player edits his profile
        Route::put('/players/{id}', '\App\Api\Controllers\PlayerServiceController@updateProfile');
        // Service actions
        // Player finds a game
        Route::get('/services/player-service/find-game', '\App\Api\Controllers\PlayerServiceController@findNewGame');
        // Player joins a game
        Route::post('/services/player-service/join-game', '\App\Api\Controllers\PlayerServiceController@joinGame');
        // Player cancels a game
        Route::post('/services/player-service/cancel-game', '\App\Api\Controllers\PlayerServiceController@cancelGame');
    });
});

/**
 * Password reset endpoints
 */
Route::post('/forgot-password', '\App\Api\Controllers\PasswordResetController@forgotPassword');
Route::post('/reset-password', '\App\Api\Controllers\PasswordResetController@resetPassword');

/**
 * These endpoints return JWT's, so make sure to wrap them in the encrypt cookies
 * middleware.
 */
Route::group(['middleware' => ['encryptCookies']], function () {
    Route::post('/login', '\App\Api\Controllers\SessionController@login');
    Route::post('/signup', '\App\Api\Controllers\UserController@signup');
});
