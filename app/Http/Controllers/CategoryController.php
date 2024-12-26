<?php

namespace App\Http\Controllers;

use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class CategoryController extends Controller
{
    /* Admin Controllers */
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Category/Index', compact('categories'));
    }

    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    public function store(StoreRequest $request)
    {
        $data = $request->only('name', 'slug', 'description',);
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $route = $file->store('categories', ['disk' => 'public']);
            $data['image'] = $route;
        }
        Category::create($data);
        return redirect()->route('dashboard.categories.index');
    }

    public function edit(Category $category)
    {
        return Inertia::render('Admin/Category/Edit', compact('category'));
    }

    public function update(UpdateRequest $request, Category $category)
    {
        $data = $request->only('name', 'slug', 'description',);
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $route = $file->store('categories', ['disk' => 'public']);
            $data['image'] = $route;
            if ($category->image){
                Storage::disk('public')->delete($category->image);
            }
        }
        $category->update($data);
        return to_route('dashboard.categories.edit', $category);
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route('dashboard.categories.index');
    }

    /* Public Controllers */
    public function indexP()
    {
        return Inertia::render('Category/Index');
    }

    public function storeP(Request $request)
    {
        //
    }

    public function show(Category $category)
    {
        //
    }
}
