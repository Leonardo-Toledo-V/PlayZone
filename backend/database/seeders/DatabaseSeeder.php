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
        \App\Models\Administrators::factory(1)->create();
        \App\Models\Videogames::factory(45)->create();
        \App\Models\Shoppings::factory(15)->create();
    }
}
