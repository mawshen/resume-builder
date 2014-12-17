<?php
	class Resume extends Eloquent{
		public $table = 'resume';
		protected $fillable = array('firstName', 'lastName', 'email', 'language', 'gender', 'mobileNo', 
									'otherNo', 'address', 'nationality', 'permanentAt', 'bDay', 'bMonth', 'bYear', 
									'preferWorkLocation', 'expectedSalary', 'otherInfo');
		
		//public static $accessible = array('name','bio');
		
		/*public static $rules = array(
			'name'=>'required|min:2',
			'bio'=>'required|min:10'
		);
		
		public static function validate($data){
			return Validator::make($data, static::$rules);
		}*/
		
		public function exp()
		{
			return $this->hasMany('exp');
		}
		
		public function edu()
		{
			return $this->hasMany('edu');
		}
	}
?>
