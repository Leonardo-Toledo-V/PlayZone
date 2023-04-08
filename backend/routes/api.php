<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShoppingsController;
use App\Http\Controllers\VideogamesController;
use App\Http\Controllers\AdministratorsController;


Route::resource('shoppings',ShoppingsController::class);
Route::resource('videogames',VideogamesController::class);
Route::post('/login', [AdministratorsController::class, 'login']);