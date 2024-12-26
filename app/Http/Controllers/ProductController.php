<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /* Admin Controllers */
    public function index()
    {
        $products = Product::with('category')->get();
        return Inertia::render('Admin/Product/Index', compact('products'));
    }

    public function create()
    {
        return Inertia::render('Admin/Product/Create');
    }

    public function store(StoreRequest $request)
    {
        $data = $request->only('name', 'slug', 'description', 'price', 'stock', 'category_id', 'status');
        
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $route = $file->store('products',['disk' => 'public']);
            $data['image'] = $route;
        }

        Product::create($data);
    }

    public function edit(Product $product)
    {
        return Inertia::render('Admin/Product/Edit', compact('product'));
    }

    public function update(UpdateRequest $request, Product $product)
    {
        $data = $request->only('name', 'slug', 'description', 'price', 'stock', 'category_id', 'status');
        
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $route = $file->store('products',['disk' => 'public']);
            $data['image'] = $route;
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
        }

        $product->update($data);
        return redirect()->route('dashboard.products.edit', $product);
    }

    public function destroy(Product $product)
    {
        //
    }

    /* Public Controllers */
    public function indexP()
    {
        return Inertia::render('Product/Index');
    }

    public function storeP(Request $request)
    {
        //
    }

    public function show(Product $product)
    {
        //
    }
}
