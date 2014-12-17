<?php
	//model to filter data after get returned data from linked-in
	class Friend extends Eloquent{

		public static function filter($linkedin){
			
			//initialize the friend array
			$friendArray=array();
			
			//if get the connection data 
			if(isset($linkedin->connections)) {
				
				//foreach loop to set the data
				foreach($linkedin->connections->values as $friend) {

					//initialization
					$firstName=null;
					$lastName=null;
					$headline=null;
					$industry=null;
					$workLocation=null;
					$picUrl=null;
					$linkedInUrl=null;
					
					//assign values in return
					if (isset($friend->id))
						$LinkedInId= $friend->id;
					if (isset($friend->firstName))
						$firstName= $friend->firstName;
					if (isset($friend->lastName))
						$lastName= $friend->lastName;
					if (isset($friend->headline))
						$headline= $friend->headline;
					if (isset($friend->industry))
						$industry= $friend->industry;
					if (isset($friend->location->name))
						$workLocation= $friend->location->name;
					if (isset($friend->pictureUrl))
						$picUrl= $friend->pictureUrl;
					if (isset($friend->siteStandardProfileRequest->url))
						$linkedInUrl= $friend->siteStandardProfileRequest->url;
					
					//push into an array
					array_push($friendArray, array("id"=>$LinkedInId, "firstName"=>$firstName, "lastName"=>$lastName
											, "positionTitle"=>$headline, "industry"=>$industry 
											, "location"=>$workLocation, "url"=>$linkedInUrl , "picUrl"=>$picUrl)
					);
					
					
				}
			}

			//return the friend array made
			return $friendArray;
		}

	}
?>
