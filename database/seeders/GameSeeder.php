<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Game;
use App\Models\Admin;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $gameData = [
            [
                'user_id'=>'1',
            ],
            [
                'user_id'=>'2',
            ],
        ];
        foreach ($gameData as $key => $val) {
            Game::create($val);
            Admin::find($val['user_id'])->increment('games_created');
        }
    }
}
