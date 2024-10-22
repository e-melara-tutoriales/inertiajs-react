<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChirpController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return Inertia::render('Chirps/Index', [
           'title' => 'Chirps',
           'subtitle' => 'A list of chirps',
       ]);
    }

    public function store(Request $request) {
        $request->validate([
            'message' => 'required|string|max:255'
        ]);

        $request->user()->chirps()->create([
            'message' => $request->input('message')
        ]);
    }
}
