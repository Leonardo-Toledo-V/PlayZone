<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Videogames;
use \Illuminate\Database\Eloquent\ModelNotFoundException;

class VideogamesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Videogames::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    try {
        $videogame = new Videogames;
        $videogame->title = $request->input('title');
        $videogame->cover = $request->input('cover');
        $videogame->description = $request->input('description');
        $videogame->price = $request->input('price');
        $videogame->save();
    } catch (\Illuminate\Database\QueryException $e) {
        $response = [
            'status' => 'error',
            'message' => 'You missed something',
        ];

        return response()->json($response, 400);
    }
    $response = [
        'status' => 'success',
        'message' => 'Videogame created successfully',
        'data' => [
            'id' => $videogame->id,
            'title' => $videogame->title,
            'cover' => $videogame->cover,
            'description' => $videogame->description,
            'price' => $videogame->price,
        ],
    ];
    return response()->json($response, 201);
}


    /**
     * Display the specified resource.
     */
    public function show(string $id)
{
    try {
        $videogame = Videogames::findOrFail($id);
    } catch (ModelNotFoundException $e) {
        $response = [
            'status' => 'error',
            'message' => 'Videogame not found'
        ];
        return response()->json($response,404);
    }
    $response = [
        'status' => 'success',
        'message' => 'Videogame founded',
        'data' => $videogame
    ];
    return response()->json($response, 201);
}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try{
            $videogame = Videogames::findOrFail($id);
        }catch(ModelNotFoundException $e){
            $response = [
                'status' => 'error',
                'message' => 'Videogame not found'
            ];
            return response()->json($response,404);
        }
        $videogame->title = $request->input('title');
        $videogame->cover = $request->input('cover');
        $videogame->description = $request->input('description');
        $videogame->price = $request->input('price');
        $videogame->save();

        $response = [
            'status' => 'success',
            'message' => 'Videogame was successfully updated',
            'data' => [
                'id' => $videogame->id,
                'title' => $videogame->title,
                'cover' => $videogame->cover,
                'description' => $videogame->description,
                'price' => $videogame->price,
            ],
        ];
        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{
            $videogame = Videogames::findOrFail($id);
        }catch(ModelNotFoundException $e){
            $response = [
                'status' => 'error',
                'message' => 'Videogame not found',
            ];
            return response()->json($response, 404);
        }
            $videogame -> delete();
            $response = [
                'status' => 'success',
                'message' => 'Videogame deleted successfully',
                'data' => [
                    'id' => $videogame->id,
                    'title' => $videogame->title,
                    'cover' => $videogame->cover,
                    'description' => $videogame->description,
                    'price' => $videogame->price,
                ],
            ];
            return response()->json($response, 201);
    }
}
