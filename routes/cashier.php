<?php

use Illuminate\Support\Facades\Route;
Route::get('/', function () {
    return inertia('cashier/index');
})->name('cashier_home');