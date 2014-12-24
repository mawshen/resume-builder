@extends('layouts/layout')

@section('content')
	@if(Session::has('message'))
		<div class="alert alert-dismissable">
		  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
		  <% Session::get('message') %>
		</div>
	@endif
	
	@if (isset($aboutJson))
	    <div class="media">
	      <a class="pull-left" href="#">
	       
	      </a>
	      <div class="media-body">
			<h1>Logged In</h1>
	      </div>
	    </div>
	@else
		<div class="jumbotron">
		    <h1>Resume Builder by </h1>
			<h1>Import Linked In Profile</h1>
			<br>
		    <p>Created by Tommy Yeap and Derek</p>
			<br>
		    <p class="text-center">
		      <a class="btn btn-lg btn-info" href=" <%url('login/linkedin')%> "><i class="icon-linkedin"></i> | Login with LinkedIn</a>
		    </p>
		</div>
	@endif
	
	@if (isset($candidateJson))
		<h1>The summary start</h1>
		<pre><%var_dump($candidateJson)%></pre>
		<h1>The summary end</h1>
	@endif
	
	@if (isset($aboutJson))
		<h1>About Me start</h1>
		<pre><%var_dump($aboutJson)%></pre>
		<h1>About Me end</h1>
	@endif
	
	@if (isset($eduJson))
		<h1>Education start</h1>
		<pre><%var_dump($eduJson)%></pre>
		<h1>Education end</h1>
	@endif
	
	@if (isset($expJson))
		<h1>Experience start</h1>
		<pre><%var_dump($expJson)%></pre>
		<h1>Experience end</h1>
	@endif
	
	@if (isset($skillJson))
		<h1>Skill start</h1>
		<pre><%var_dump($skillJson)%></pre>
		<h1>Skill end</h1>
	@endif
	
	@if (isset($friendJson))
		<h1>Friend start</h1>
		<pre><%var_dump($friendJson)%></pre>
		<h1>Friend end</h1>
	@endif

@stop