<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\BaseDasboardController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends BaseDasboardController
{
    public function __invoke()
    {
        return $this->render('index');
    }
}
