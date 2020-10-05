<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Player extends Model
{
    use HasFactory, Notifiable, HasApiTokens;

    const STATUS_ONLINE = 1;
    const STATUS_OFFLINE = 2;
    const STATUS_SEARCH = 3;
    const STATUS_PLAY = 4;

    /**
     * Disable timestamp fields (created_at, updated_at)
     * @var bool
     */
    public $timestamps = false;
    /**
     * Primary key name
     * @var string|null
     */
    protected $primaryKey = 'user_id';
    /**
     * Disable autoincrement field (id)
     * @var bool
     */
    public $incrementing = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'games_started', 'games_finished'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
    ];

    /**
     * Get user entity for this players
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    /**
     * Get all games for this player
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function games()
    {
        /*return $this->hasManyThrough(
            Game::class,
            GameResult::class,
            'user_id',
            'id',
            'user_id',
            'game_id'
        );*/
        return $this->belongsToMany(
            Game::class,
            'game_results',
            'user_id',
            'game_id');
    }
}
