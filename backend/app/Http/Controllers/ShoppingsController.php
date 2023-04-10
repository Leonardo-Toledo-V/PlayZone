<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shoppings;
use App\Models\Videogames;
use \Illuminate\Database\QueryException;
use \Illuminate\Database\Eloquent\ModelNotFoundException;

class ShoppingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = 10;
        $page = $request->query('page', 1);
        $shoppings = Shoppings::paginate($perPage, ['*'], 'page', $page);
        if ($page > $shoppings->lastPage()) {
            $response = [
                'status' => 'error',
                'message' => 'Page not found'
            ];
            return response()->json($response, 404);
        }
    
        $shoppingsWithVideogames = $shoppings->map(function($shopping) {
            $videogame = Videogames::findOrFail($shopping->id_videogame);
            return [
                'id' => $shopping->id,
                'fullName' => $shopping->fullName,
                'email' => $shopping->email,
                'videogame' => [
                    'id' => $videogame->id,
                    'title' => $videogame->title,
                    'cover' => $videogame->cover,
                    'description' => $videogame->description,
                    'price' => $videogame->price,
                ]
            ];
        });
    
        return $shoppingsWithVideogames;
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $shoppings = new Shoppings;
            $shoppings->fullName = $request->input('fullName');
            $shoppings->email = $request->input('email');
            $shoppings->id_videogame = $request->input('id_videogame');
            $shoppings->save();
        } catch (QueryException $e) {
            $response = [
                'status' => 'error',
                'message' => 'Error, check your information',
            ];
            return response()->json($response, 400);
        }
        $response = [
            'status' => 'success',
            'message' => 'Shopping created successfully',
            'data' => [
                'fullName' => $shoppings->fullName,
                'email' => $shoppings->email,
                'id_videogame' => $shoppings->id_videogame,
            ],
        ];
        return response()->json($response, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        try {
            $shoppings = Shoppings::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            $response = [
                'status' => 'error',
                'message' => 'Shopping not found'
            ];
            return response()->json($response,404);
        }
        $response = [
            'status' => 'success',
            'message' => 'Shopping founded',
            'data' => $shoppings
        ];
        return response()->json($response, 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{
            $shoppings = Shoppings::findOrFail($id);
        }catch(ModelNotFoundException $e){
            $response = [
                'status' => 'error',
                'message' => 'Shopping not found',
            ];
            return response()->json($response, 404);
        }
            $shoppings -> delete();
            $response = [
                'status' => 'success',
                'message' => 'Shopping deleted successfully',
                'data' => [
                    'id' => $shoppings->id,
                    'fullName' => $shoppings->fullName,
                    'id_videogame'=>$shoppings->id_videogame
                ],
            ];
            return response()->json($response, 201);
    }
}
