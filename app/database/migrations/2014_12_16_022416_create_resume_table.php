<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResumeTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('resume',function($table){
			$table->increments('id');
			$table->string('firstName')->nullable();
			$table->string('lastName')->nullable();
			$table->string('email')->nullable();
			$table->string('language',100)->nullable();
			$table->string('gender',10)->nullable();
			$table->string('mobileNo',20)->nullable();
			$table->string('otherNo',20)->nullable();
			$table->string('address',3000)->nullable();
			$table->string('nationality',100)->nullable();
			$table->string('permanentAt',100)->nullable();
			
			$table->integer('bDay')->nullable();
			$table->integer('bMonth')->nullable();
			$table->integer('bYear')->nullable();
			
			$table->string('preferWorkLocation',100)->nullable();
			$table->double('expectedSalary',8,2)->nullable();
			$table->string('otherInfo',100)->nullable();

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('resume');
	}

}
