<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Videogames;
use \Illuminate\Database\Eloquent\ModelNotFoundException;
use \Illuminate\Database\QueryException;
use \Illuminate\Support\Facades\Storage;

class VideogamesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = 10;
        $page = $request->query('page', 1);
        $videogames = Videogames::paginate($perPage, ['*'], 'page', $page);
        if ($page > $videogames->lastPage()) {
            $response = [
                'status' => 'error',
                'message' => 'Page not found'
            ];
            return response()->json($response, 404);
        }
        return $videogames;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $fileName = time().'.'.$request->file("cover")->getClientOriginalExtension();  
        
    $path=$request->file('cover')->move(('../../frontend/public'), $fileName);

    try {
        $videogame = new Videogames;
        $videogame->title = $request->input('title');
        $videogame->cover = $fileName;
        $videogame->description = $request->input('description');
        $videogame->price = $request->input('price');
        $videogame->save();
    } catch (QueryException $e) {
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
        
        if($request->hasFile('cover') && $request->file('cover')->isValid()){
            $path=$videogame->cover;
            Storage::disk('frontend')->delete($path);
            $fileName = time().'.'.$request->file("cover")->getClientOriginalExtension();  
            $path=$request->file('cover')->move(('../../frontend/public'), $fileName);
            $videogame->cover = $fileName;
        }

        $videogame->title = $request->has('title') && $request->get('title') !=null &&$request->get('title')!='' ? $request->get('title') : $videogame->title;
        $videogame->description = $request->has('description') && $request->get('description') !=null &&$request->get('description')!='' ? $request->get('description') : $videogame->description;
        $videogame->price = $request->has('price')&& $request->get('price') !=null &&$request->get('price')!=''? $request->get('price') : $videogame->price;
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
        
            $path=$videogame->cover;
            Storage::disk('frontend')->delete($path);
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
