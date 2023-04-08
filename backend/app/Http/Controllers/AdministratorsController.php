<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Administrators;
use Illuminate\Support\Facades\Hash;

class AdministratorsController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');
    
        $user = Administrators::where('username', $username)->first();
    
        if (!$user || !Hash::check($password, $user->password)) {
            $response = [
                'status' => 'error',
                'message' => 'Invalid credentials'
            ];
            return response()->json($response, 401);
        }
    
        $response = [
            'status' => 'success',
            'message' => 'Administrator found'
        ];
        return response()->json($response, 200);
    }
    
}
