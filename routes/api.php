<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/marcas',"WebServiceController@getMarcas");
Route::get('/modelos/{marca}/{modelo}',"WebServiceController@getModelos");
Route::get('/tarifas','WebServiceController@getTarifas');
Route::post('/cotizacion','ClienteController@store');