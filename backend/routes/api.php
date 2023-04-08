<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShoppingsController;
use App\Http\Controllers\VideogamesController;


Route::resource('shoppings',ShoppingsController::class);
Route::resource('videogames',VideogamesController::class);


