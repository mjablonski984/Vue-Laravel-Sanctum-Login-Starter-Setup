<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//  Authenticate route middleware (used in e.g dashboard route on the client)
Route::middleware('auth:sanctum')->get('/athenticated', function () {
    return true;
});

Route::post('register', 'App\\Http\\Controllers\\RegisterController@register');
Route::post('login', 'App\\Http\\Controllers\\LoginController@login');
Route::post('logout', 'App\\Http\\Controllers\\LoginController@logout');