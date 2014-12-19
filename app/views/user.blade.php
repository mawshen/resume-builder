@extends('layouts/layout')

@section('content')
	@if(Session::has('message'))
		<div class="alert alert-dismissable">
		  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
		  {{ Session::get('message')}}
		</div>
	@endif

	@if (isset($aboutArray))
		<h1>About Me start</h1>
		<pre>{{var_dump($aboutArray)}}</pre>
		<h1>About Me end</h1>
	@endif
	
	@if (isset($eduArray))
		<h1>Education start</h1>
		<pre>{{var_dump($eduArray)}}</pre>
		<h1>Education end</h1>
	@endif
	
	@if (isset($expArray))
		<h1>Experience start</h1>
		<pre>{{var_dump($expArray)}}</pre>
		<h1>Experience end</h1>
	@endif
	
	@if (isset($skillArray))
		<h1>Skill start</h1>
		<pre>{{var_dump($skillArray)}}</pre>
		<h1>Skill end</h1>
	@endif
	
	@if (isset($friendArray))
		<h1>Friend start</h1>
		<pre>{{var_dump($friendArray)}}</pre>
		<h1>Friend end</h1>
	@endif
	
	@if (isset($data))
	    <div class="media">
	      <a class="pull-left" href="#">
	        <img class="media-object" src="{{ $data->pictureUrl }}" alt="Profile image">
	      </a>
	      <div class="media-body">
	        <h4 class="media-heading">Name: </h4>
	        <p>{{$data->firstName .' '.$data->lastName}}</p>

	        <h4 class="media-heading">Location: </h4>
	        <p>{{$data->location->country->code .' ,'.$data->location->name }}</p>
	        <h4 class="media-heading">All captured info: </h4>
	        <pre>{{var_dump($data)}}</pre>
	      </div>
	    </div>
	@else
		<div class="jumbotron">
		    <h1>LinkedIn login and data pull</h1>
		    <p>Created by <a href="http://twitter.com/msurguy" target="_blank">Maks</a></p>
		    <p class="text-center">
		      <a class="btn btn-lg btn-info" href="{{url('login/linkedin')}}"><i class="icon-linkedin"></i> | Login with LinkedIn</a>
		    </p>
		</div>
	@endif
	
	
@stop