<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/*Route::get('/', function()
{
	return View::make('index');
});*/

	Route::get('/', function()
	{
		$data = Session::get('data');
		$friendArray = Session::get('friendArray');
		$aboutArray = Session::get('aboutArray');
		$eduArray = Session::get('eduArray');
		return View::make('user')->with('data', $data)->with('friendArray',$friendArray)
				->with('aboutArray',$aboutArray)->with('eduArray',$eduArray);
	});

	//Route::get('login',array('as'=>'login', 'uses'=>'LoginController@login'));
	
	Route::get('login/linkedin', function()
	{
		$provider = new Linkedin(Config::get('social.linkedin'));
		if ( !Input::has('code')) {
			// If we don't have an authorization code, get one
			$provider->authorize();
		} else {
			try {
				// Try to get an access token (using the authorization code grant)
				$t = $provider->getAccessToken('authorization_code', array('code' => Input::get('code')));
				try {
					// We got an access token, let's now get the user's details
					$userDetails = $provider->getUserDetails($t);
					$resource = '/v1/people/~:(location,picture-url,industry,specialties,connections,positions,educations,skills,languages,summary
												,first-name,last-name,date-of-birth,phone-numbers,email-address,main-address)';
					$params = array('oauth2_access_token' => $t->accessToken, 'format' => 'json');
					$url = 'https://api.linkedin.com' . $resource . '?' . http_build_query($params);
					$context = stream_context_create(array('http' => array('method' => 'GET')));
					$response = file_get_contents($url, false, $context);
					$data = json_decode($response);
					//var_dump($data->connections);
					
					$linkedInData = new linkedInData();
					$friendArray = linkedInData::friendFilter($data);
					$aboutArray = linkedInData::aboutFilter($data);
					$eduArray = linkedInData::educationFilter($data);

					return Redirect::to('/')->with('data',$data)
					->with('friendArray',$friendArray)
					->with('aboutArray',$aboutArray)
					->with('eduArray',$eduArray);
					
				} catch (Exception $e) {
					return 'Unable to get user details';
				}

			} catch (Exception $e) {
				return 'Unable to get access token';
			}
		}
	});
	
	//Route::get('login',array('as'=>'login', 'uses'=>'LoginController@login'));
	/*Route::get('author/{id}',array('as'=>'author', 'uses'=>'AuthorsController@get_view'));
	Route::get('authors/new',array('as'=>'new_author', 'uses'=>'AuthorsController@get_new'));
	Route::post('authors/create',array('before'=>'csrf','uses'=>'AuthorsController@post_create'));
	Route::get('author/{id}/edit',array('as'=>'edit_author', 'uses'=>'AuthorsController@get_edit'));
	Route::put('author/update',array('before'=>'csrf','uses'=>'AuthorsController@put_update'));
	Route::delete('author/delete', array('before'=>'csrf','uses'=>'AuthorsController@delete_destroy'));*/
