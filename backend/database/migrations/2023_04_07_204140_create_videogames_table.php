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
        if(!Schema::hasTable('Videogames')){
            Schema::create('Videogames', function (Blueprint $table) {
                $table->id()->autoIncrement();
                $table->string('title');
                $table->string('description');
                $table->string('cover');
                $table->string('price');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Videogames');
    }
};
