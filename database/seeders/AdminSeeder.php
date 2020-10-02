<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
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
                'user_id'=>'1',
            ],
            [
                'user_id'=>'2',
            ],
            [
                'user_id'=>'3',
            ],
        ];
        foreach ($userData as $key => $val) {
            Admin::create($val);
        }
    }
}
