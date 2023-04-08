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
        if(!Schema::hasTable('Administrators')){
            Schema::create('Administrators', function (Blueprint $table) {
                $table->id()->autoincrement();
                $table->string('username')->unique();
                $table->string('password');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Administrators');
    }
};
