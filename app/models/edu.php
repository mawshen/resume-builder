<?php
	class exp extends Eloquent{
		public $table = 'exp';
		protected $fillable = array('schName', 'gradMonth', 'gradYear', 'qualification', 'schLocation', 'studyField', 
									'majoring', 'grade', 'addInfo');
		
		//public static $accessible = array('name','bio');
		
		/*public static $rules = array(
			'name'=>'required|min:2',
			'bio'=>'required|min:10'
		);
		
		public static function validate($data){
			return Validator::make($data, static::$rules);
		}*/
	}
?>
