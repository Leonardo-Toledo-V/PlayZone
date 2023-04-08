<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Videogames>
 */
class VideogamesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' =>$this->faker->word(),
            'description' =>$this->faker->text(),
            'cover' => 'ruta',
            'price' => $this->faker->numberBetween(10, 100),
        ];
    }
}
