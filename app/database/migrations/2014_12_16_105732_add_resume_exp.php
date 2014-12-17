<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddResumeExp extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		DB::table('exp')->insert(array(
			'id'=>1,
			'positionTitle'=>"UUM",
			'comName'=>"Degree",
			'comLocation'=>"Sintok, Kedah"
			
		));
		
		//$table->integer('id')->unsigned();
		/*	$table->foreign('id')->references('id')->on('resume');
			$table->string('positionTitle')->nullable();
			$table->string('comName')->nullable();
			$table->string('comLocation')->nullable();
			$table->string('joinMonth')->nullable();
			$table->string('joinYear')->nullable();
			$table->string('industryId')->nullable();
			$table->string('specialization_id')->nullable();
			$table->string('position_level')->nullable();
			$table->string('salary')->nullable();
			$table->string('expDesc')->nullable();			*/
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		DB::table('exp')->delete(1);
	}

}
