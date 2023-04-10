<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if(!Schema::hasTable('Shoppings')){
            Schema::create('Shoppings', function (Blueprint $table) {
                $table->id()->autoincrement();
                $table->string('fullName');
                $table->string('email');
                $table->foreignId('id_videogame')->constrained('videogames')->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Shoppings');
    }
};
