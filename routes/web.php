<?php

use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->name('dashboard.')->group(base_path('routes/dashboard.php'));
Route::prefix('cashier')->name('cashier.')->group(base_path('routes/cashier.php'));
Route::prefix('account')->name('account.')->group(base_path('routes/account.php'));
