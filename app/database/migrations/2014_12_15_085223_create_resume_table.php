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
			$table->string('firstName');
			$table->string('lastName');
			$table->string('email');
			$table->string('language',100);
			$table->string('gender',10);
			$table->string('mobileNo',20);
			$table->string('otherNo',20);
			$table->string('address',3000);
			$table->string('nationality',100);
			$table->string('permanentAt',100);
			
			$table->integer('bDay');
			$table->integer('bMonth');
			$table->integer('bYear');
			
			$table->string('preferWorkLocation',100);
			$table->double('expectedSalary',8,2);
			$table->string('otherInfo',100);

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
