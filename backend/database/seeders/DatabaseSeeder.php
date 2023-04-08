<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Administrators::factory(3)->create();
        \App\Models\Videogames::factory(30)->create();
        \App\Models\Shoppings::factory(15)->create();
    }
}
