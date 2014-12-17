<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddResumeEdu extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		DB::table('edu')->insert(array(
			'id'=>1,
			'schName'=>"UUM",
			'qualification'=>"Degree",
			'schLocation'=>"Sintok, Kedah",
			'studyField'=>"Multimedia",
			'grade'=>3.74
	
		));
	
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		DB::table('edu')->delete(1);
		//DB::table('edu')->where('id','=','1')->delete();
	}

}
