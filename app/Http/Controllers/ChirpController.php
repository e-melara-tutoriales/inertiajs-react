<?php

namespace App\Http\Controllers;

use App\Http\Resources\ChirpResource;
use App\Models\Chirp;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ChirpController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $chirps = Chirp::with('user:id,name')->latest()->get();
        return Inertia::render('Chirps/Index', [
           'chirps' => ChirpResource::collection($chirps),
       ]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'message' => 'required|string|max:255'
        ]);
        $request->user()->chirps()->create($validated);
        return back()->with('status', __('Chirp created!'));
    }

    public function update(Request $request, Chirp $chirp) {
        $this->authorize('update', $chirp);
        
        $validated = $request->validate([
            'message' => 'required|string|max:255'
        ]);
        $chirp->update($validated);
        return back()->with('status', __('Chirp updated!'));
    }

    public function destroy(Chirp $chirp) {
        $chirp->delete();
        return back()->with('status', __('Chirp deleted!'));
    }
}