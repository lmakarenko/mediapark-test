<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    const STATUS_NEW = 1;
    const STATUS_PROCESS = 2;
    const STATUS_EDIT = 3;
    const STATUS_DONE = 4;
    const STATUS_ERROR = 5;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'status',
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
        'started_at' => 'datetime',
        'ended_at' => 'datetime',
    ];
    /**
     * Get admin for this game
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function admin()
    {
        return $this->belongsTo(Admin::class, 'user_id', 'user_id');
    }
    /**
     * Get all players for this game
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function players()
    {
        /*return $this->hasManyThrough(
            Player::class,
            GameResult::class,
            'game_id',
            'user_id',
            'id',
            'user_id',
        );*/
        return $this->belongsToMany(
            Player::class,
            'game_results',
            'game_id',
            'user_id');
    }
    /**
     * Get all results for this game
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function results()
    {
        return $this->hasMany(GameResult::class, 'game_id', 'id');
    }
}
