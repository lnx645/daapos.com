<?php

use App\Http\Controllers\Account\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/login',LoginController::class)->name('account.login');