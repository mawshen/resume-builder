<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddResume extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		DB::table('resume')->insert(array(
			'firstName'=>"Tommy Yeap",
			'lastName'=>"Maw Shen",
			'email'=>" dream@email.com",
			'mobileNo'=>"016-4109759",
			'bDay'=>24,
			'bMonth'=>5,
			'bYear'=>"1991",
		
			'created_at'=>date('Y-m-d H:m:s'),
			'updated_at'=>date('Y-m-d H:m:s')
		));
		
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//DB::table('resume')->delete(1);
		DB::table('resume')->where('firstName','=','Tommy Yeap')->delete();
	}

}
