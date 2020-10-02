<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
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
                'name'=>'Admin',
                'email'=>'admin@mediapark.com',
                'is_admin'=>'1',
                'password'=> bcrypt('123'),
            ],
            [
                'name'=>'Admin 2',
                'email'=>'admin2@mediapark.com',
                'is_admin'=>'1',
                'password'=> bcrypt('123'),
            ],
            [
                'name'=>'Admin 3',
                'email'=>'admin3@mediapark.com',
                'is_admin'=>'1',
                'password'=> bcrypt('123'),
            ],
            [
                'name'=>'Player1',
                'email'=>'player1@mediapark.com',
                'is_admin'=>'0',
                'password'=> bcrypt('123'),
            ],
            [
                'name'=>'Player2',
                'email'=>'player2@mediapark.com',
                'is_admin'=>'0',
                'password'=> bcrypt('123'),
            ],
            [
                'name'=>'Player3',
                'email'=>'player3@mediapark.com',
                'is_admin'=>'0',
                'password'=> bcrypt('123'),
            ],
            [
                'name'=>'Player4',
                'email'=>'player4@mediapark.com',
                'is_admin'=>'0',
                'password'=> bcrypt('123'),
            ],
            [
                'name'=>'Player5',
                'email'=>'player5@mediapark.com',
                'is_admin'=>'0',
                'password'=> bcrypt('123'),
            ],
        ];
        foreach ($userData as $key => $val) {
            User::create($val);
        }
    }
}
