<?php
namespace App\Transformers;

use App\Models\Game;
use League\Fractal\TransformerAbstract;

/**
 * Class GameTransformer.
 *
 * @package namespace App\Transformers;
 */
class GameTransformer extends TransformerAbstract
{
    /**
     * Transform the Game entity.
     *
     * @param \App\Models\Game $model
     *
     * @return array
     */
    public function transform(Game $model)
    {
        $admin = $model->admin;
        return [
            //'slug' => $model->slug(),
            'id' => $model->id,
            'status' => $model->status,
            'num_players' => $model->num_players,
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at,
            'ended_at' => $model->ended_at,
            'admin' => [
                'id' => $admin->user_id,
                'email'=> $admin->user->email,
                'name' => $admin->user->name,
                'games_created' => $admin->games_created,
                'games_finished' => $admin->games_finished,
            ],
        ];
    }
}
