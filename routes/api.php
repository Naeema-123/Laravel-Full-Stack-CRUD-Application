<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\EmailController;
use App\Models\Student;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//get all student data
 Route::get('students','StudentController@getStudent');

 // Get Specic student detail
Route::get('student/{id}', 'StudentController@getStudentById');

// Add Student
Route::post('addStudent', 'StudentController@addStudent');

// Update Student
Route::put('updateStudent/{id}', 'StudentController@updateStudent');

// Delete Student
Route::delete('deleteStudent/{id}', 'StudentController@deleteStudent');
 