
<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\EmailController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('welcome');
});

Route::get('/dbconn', function () {
    return view('dbconn');

});
Route::get('students', [EmailController::class, 'send']);
Route::post('students', [EmailController::class, 'store'])->name('students.store');






//Route::get('/send-email', 'EmailController@send');


//Route::get('send-mail', function () {
    
   
    //$details = [
       // 'title' => 'Mail from @gmail.com',
        //'body' => 'This is for testing email using smtp'
   // ];
   
    //Mail::to('naeemaahmed1996@gmail.com')->send(new \App\Mail\MyTestMail($details));
   
    //dd("Email is Sent.");
//});