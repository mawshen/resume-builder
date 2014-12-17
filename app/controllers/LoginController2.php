<?php

class LoginController2 extends BaseController {

	public $restful=true;
	
	//1st style to view
	public function get_login(){
		$view=View::make('index');
		
		return $view;

	}
	
	public function get_index3(){
		
		return View::make('index');
	}
	
}
