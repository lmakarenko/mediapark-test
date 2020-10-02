<?php

namespace Database\Seeders;

use App\Models\Player;
use Illuminate\Database\Seeder;

class PlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userData = [
            [
                'user_id'=>'4',
            ],
            [
                'user_id'=>'5',
            ],
            [
                'user_id'=>'6',
            ],
            [
                'user_id'=>'7',
            ],
            [
                'user_id'=>'8',
            ],
        ];
        foreach ($userData as $key => $val) {
            Player::create($val);
        }
    }
}
