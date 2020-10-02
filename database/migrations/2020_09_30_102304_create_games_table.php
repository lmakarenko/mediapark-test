<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use \Illuminate\Support\Facades\DB;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Create game status type if not exists
        /*DB::statement("
        DO $$
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'gstatus') THEN
                CREATE TYPE gstatus AS ENUM ('new', 'process', 'edit', 'done');
            END IF;
            --more types here...
        END$$;
        ");*/
        // Create games table
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->enum('status', ['new', 'process', 'edit', 'done'])->default('new');
            $table->unsignedTinyInteger('num_players')->default(0);
            $table->timestamp('ended_at', 0)->nullable();
            $table->timestamps();
            // Foreign keys with constraints
            $table->foreign('user_id')
                ->references('user_id')->on('admins')
                ->onDelete('restrict')
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
        Schema::dropIfExists('games');
    }
}
