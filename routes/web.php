<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Models\Order;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');


Route::get('/products', [ProductController::class, 'indexP'])->name('products.index');
/* Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show');*/
Route::get('/categories', [CategoryController::class, 'indexP'])->name('categories.index');
/* Route::get('/categories/{category}', [CategoryController::class, 'show'])->name('categories.show'); */

// Rutas protegidas por autenticación
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/Order', [OrderController::class, 'index'])->name('order.index');
    /* Route::get('/Order/{order}', [OrderController::class, 'show'])->name('order.show');
    Route::post('/Order', [OrderController::class, 'store'])->name('order.store');
    Route::delete('/Order/{order}', [OrderController::class, 'destroy'])->name('order.destroy');
    Route::patch('/Order/{order}', [OrderController::class, 'update'])->name('order.update');
     */
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::prefix('dashboard')->group(function () {
        // Rutas de productos
        Route::get('/products', [ProductController::class, 'index'])->name('dashboard.products.index');
        Route::get('/products/create', [ProductController::class, 'create'])->name('dashboard.products.create');
        Route::post('/products', [ProductController::class, 'store'])->name('dashboard.products.store');
        Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('dashboard.products.edit');
        Route::put('/products/{product}', [ProductController::class, 'update'])->name('dashboard.products.update');
        Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('dashboard.products.destroy'); 
        
        /* Route::get('/products/{product}', [ProductController::class, 'show'])->name('dashboard.products.show');*/

        // Rutas de categorías
        Route::get('/categories', [CategoryController::class, 'index'])->name('dashboard.categories.index');
        Route::get('/categories/create', [CategoryController::class, 'create'])->name('dashboard.categories.create');
        Route::post('/categories', [CategoryController::class, 'store'])->name('dashboard.categories.store');
        Route::get('/categories/{category}/edit', [CategoryController::class, 'edit'])->name('dashboard.categories.edit');
        Route::post('/categories/{category}', [CategoryController::class, 'update'])->name('dashboard.categories.update');
        Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->name('dashboard.categories.destroy');
        /* Route::get('/categories/{category}', [CategoryController::class, 'show'])->name('dashboard.categories.show');*/
    });
});

require __DIR__ . '/auth.php';
