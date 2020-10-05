<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->primary();
            $table->enum('status', [1, 2, 3, 4])->default(1);
            $table->unsignedInteger('games_started')->default(0);
            $table->unsignedInteger('games_finished')->default(0);
            $table->double('rating')->default('1.0');
            // Foreign keys with constraints
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('players');
    }
}
