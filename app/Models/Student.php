<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mail;
use App\Mail\ContactMail;

class Student extends Model
{
    use HasFactory;
    public $table = 'students';
    protected $fillable =['name','department','email'];
    
}
