<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('edu',function($table){
			$table->integer('id')->unsigned();
			$table->foreign('id')->references('id')->on('resume');
			$table->string('schName')->nullable();
			$table->string('gradMonth')->nullable();
			$table->string('gradYear')->nullable();
			$table->string('qualification')->nullable();
			$table->string('schLocation')->nullable();
			$table->string('studyField')->nullable();
			$table->string('majoring')->nullable();
			$table->string('grade')->nullable();
			$table->string('addInfo')->nullable();
			
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('edu');
	}

}
