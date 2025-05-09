<?php

use App\Http\Controllers\CaseStudyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');


Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/case-studies', [CaseStudyController::class, 'index'])->name('study');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
