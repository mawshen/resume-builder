<?php

class LoginController extends \BaseController {

	public $restful = true;
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return View::make('index');
	}

	public function login()
	{
		return View::make('linkedin.login');
	}

}
