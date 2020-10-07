<?php

namespace App\Api\Controllers;

use App\Services\Game\GameAdminService;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AdminServiceController
{
    private $gameAdminService;

    public function __construct(GameAdminService $gameAdminService)
    {
        $this->gameAdminService = $gameAdminService;
    }

}
