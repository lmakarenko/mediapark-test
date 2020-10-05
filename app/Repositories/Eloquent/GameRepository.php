<?php

namespace App\Repositories\Eloquent;

use App\Models\Game;
use App\Models\GameResult;
use App\Presenters\GamePresenter;
use App\Contracts\Repository\GameRepositoryContract;
use App\Criterias\NewGameCriteria;

class GameRepository extends CommonRepository implements GameRepositoryContract
{

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
        /*$this->pushCriteria(NewGameCriteria::class);
        return $this->get();*/
        return $this->getByCriteria(new NewGameCriteria());
    }

    /**
     * Set status for a specific game
     *
     * @param $game_id
     * @param $status
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Support\Collection|mixed
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    protected function setGameStatus($game_id, $status)
    {
        return $this->update(['id' => $game_id, 'status' => $status], $game_id);
    }

    /**
     * @param $game_id
     * @param $status
     */
    public function setGameStatusNew($game_id)
    {
        return $this->setGameStatus($game_id, Game::STATUS_NEW);
    }

    /**
     * @param $game_id
     * @param $status
     */
    public function setGameStatusProcess($game_id)
    {
        return $this->setGameStatus($game_id, Game::STATUS_PROCESS);
    }

    /**
     * @param $game_id
     * @param $status
     */
    public function setGameStatusEdit($game_id)
    {
        return $this->setGameStatus($game_id, Game::STATUS_EDIT);
    }

    /**
     * @param $game_id
     * @param $status
     */
    public function setGameStatusDone($game_id)
    {
        return $this->setGameStatus($game_id, Game::STATUS_DONE);
    }

    /**
     * @param $game_id
     * @param $status
     */
    public function setGameStatusError($game_id)
    {
        return $this->setGameStatus($game_id, Game::STATUS_ERROR);
    }

    /**
     * Sets all results for a specific game
     *
     * @param $game_id
     * @param $data
     * @return mixed
     */
    public function setGameResults($game_id, $data)
    {
        return $this->find($game_id)->results()->sync($data);
    }

    /**
     * Updates game results for a specific game and player
     *
     * @param $game_id
     * @param $user_id
     * @param $data
     * @return mixed
     */
    public function setPlayerResult($game_id, $user_id, $data)
    {
        return $this->find($game_id)->results()->sync([
            $user_id => $data
        ], false);
    }

    /**
     * Gets game results for a specific game and player
     *
     * @param $game_id
     * @param $user_id
     * @return \Illuminate\Support\HigherOrderCollectionProxy|mixed
     */
    public function getPlayerResult($game_id, $user_id)
    {
        /*return $this->find($game_id)->results->where([
            ['game_id', $game_id],
            ['user_id', $user_id]
        ])->get();*/
        return $this->find($game_id)->results
                ->filter(function ($result) use ($user_id) {
                    return $result->user_id == $user_id;
                })->pluck('user_place');
    }

    /**
     * Adds player to a specific game
     *
     * @param $game_id
     * @param $user_id
     * @return mixed
     */
    public function addPlayerToGame($game_id, $user_id)
    {
        return $this->find($game_id)->players()->attach($user_id);
    }

    /**
     * Removes player from a specific game
     *
     * @param $game_id
     * @param $user_id
     * @return mixed
     */
    public function removePlayerFromGame($game_id, $user_id)
    {
        return $this->find($game_id)->players()->detach($user_id);
    }

    /**
     * Gets number of players for a specific game
     *
     * @param $game_id
     * @return mixed
     */
    public function getPlayersCount($game_id)
    {
        return $this->model->where('id', $game_id)->pluck('num_players')->first();
    }

    /**
     * Increments number of players for a specific game, by default increments by 1
     *
     * @param $game_id
     * @param int $by
     * @return mixed
     */
    public function incPlayersCount($game_id, $by = 1)
    {
        return $this->find($game_id)->increment('num_players', $by);
    }

    /**
     * Decrements number of players for a specific game, by default increments by 1
     *
     * @param $game_id
     * @param int $by
     * @return mixed
     */
    public function decPlayersCount($game_id, $by = 1)
    {
        return $this->find($game_id)->decrement('num_players', $by);
    }
}
