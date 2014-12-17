<?php

class ResumeController extends BaseController {

	public $restful=true;
	
	//1st style to view
	public function get_index(){
		$view=View::make('authors.index',array('name'=>'Tommy Yeap'))
		->with('age','28');
		$view->title='Testing by index 1';
		$view->location="Msia";
		$view['spec']='php';
		
		return $view;
	}
	
	//another style to view
	public $layout='layouts.default2';
	public function get_index2(){
		$view=View::make('authors.index2',array('name'=>'Tommy Yeap'))
		->with('age','28');
		
		$view->location="Msia";
		$view['spec']='php';
		$view->title='Testing by index 2';
		$this->layout->content = $view;
		
		return $view;
	}
	
	public function get_index3(){
		
		return View::make('authors.index3')
			->with('title', 'Testing 3')
			->with('authors',Author::orderBy('name','desc')->get());
	}
	
	public function get_view($id){
		return View::make('authors.view')
			->with('title','author selected')
			->with('author',Author::find($id));
	}
	
	public function get_new(){
		return View::make('authors.new')
			->with('title','author new');
			
	}
	
	public function post_create(){
		$validation=Author::validate(Input::all());
		
		if ($validation->fails()){
			return Redirect::to('authors/new')->withErrors($validation)->withInput();
		}
		else{
		
			$author = new Author ();
			$author->name=Input::get('name');
			$author->bio=Input::get('bio');

			$author->save();
			
			return Redirect::route('authors')
				->with('msg','Author has been added');
		}
	}
	
	public function get_edit($id){
		return View::make('authors.edit')
			->with('title','Edit Author')
			->with('author',Author::find($id));
	}
	
	public function put_update(){
		$id = Input::get('id');
		$validation=Author::validate(Input::all());
		
		if ($validation->fails()){
			return Redirect::route('edit_author',$id)->withErrors($validation);
		}
		else{
		
			Author::find($id)->update(array('name'=>Input::get('name'),'bio'=>Input::get('bio')));
			
			return Redirect::route('authors')
				->with('msg','Author has been updated');
		}
		
	}
	
	public function delete_destroy(){
		Author::find(Input::get('id'))->delete();
		return Redirect::route('authors')->with('msg','Author has been deleted');
	}
}
