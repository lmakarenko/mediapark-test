<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GameResult;
use App\Models\Player;

class GameResultSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $gameResultData = [
            [
                'game_id' => '1',
                'user_id'=>'4',
                'user_place' => '1',
            ],
            [
                'game_id' => '1',
                'user_id'=>'5',
                'user_place' => '2',
            ],
            [
                'game_id' => '1',
                'user_id'=>'6',
                'user_place' => '3',
            ],
            [
                'game_id' => '1',
                'user_id'=>'7',
                'user_place' => '4',
            ],
            [
                'game_id' => '1',
                'user_id'=>'8',
            ],
        ];
        foreach ($gameResultData as $key => $val) {
            GameResult::create($val);
            Player::find($val['user_id'])->increment('games_started');
        }
    }
}
