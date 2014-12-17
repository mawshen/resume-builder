<?php
	//model to filter data after get returned data from linked-in
	class linkedInData extends Eloquent{

		//the function to set user's personal info
		public static function aboutFilter($linkedin){
			
			//initialize the about me fields
			$aboutArray=array();
			$dob=null;
			$mobileNo = null;
			$otherNo = null;
			$email = null;
			$address = null;
			$first_name = $last_name = '';
			
			if(isset($linkedin->dateOfBirth)) {
				$dob = $linkedin->dateOfBirth;
				$dob = $dob->day.'/'.$dob->month.'/'.$dob->year;
			}

			if(isset($linkedin->phoneNumbers)) {
				if ($linkedin->phoneNumbers->_total>0){
					foreach($linkedin->phoneNumbers->values as $phone) {
						if($phone->phoneType = 'mobile') {
							$mobileNo = $phone->phoneNumber;
						} else {
							$otherNo = $phone->phoneNumber;
						}
					}
				}
			}

			if(isset($linkedin->emailAddress)) {
				$email = $linkedin->emailAddress;
			}

			if(isset($linkedin->mainAddress)) {
				$address = $linkedin->mainAddress;
			}

			if(isset($linkedin->firstName)) {
				$first_name = $linkedin->firstName;
			}
	
			if(isset($linkedin->lastName)) {
				$last_name = $linkedin->lastName;
			}

			//push into an array
			array_push($aboutArray, array("firstName"=>$first_name, "lastName"=>$last_name
									,"dob"=>$dob, "mobileNo"=>$mobileNo, "otherNo"=>$otherNo
									, "email"=>$email, "address"=>$address)
			);

			//return the about me
			return $aboutArray;
		}
		
		//the function to set user's education info
		public static function educationFilter($linkedin){
			
			//initialize the education fields
			$eduArray=array();
			$schName =  $end_date = $qualification = $location = $field_of_study = $desc = null;
			
			if(isset($linkedin->educations)) {
			
				foreach($linkedin->educations->values as $edu) {
					
					if(isset($edu->schoolName)) {
						$schName = $edu->schoolName;
					}
					if(isset($edu->endDate)) {
						$end_date = $edu->endDate->year;
					}
					if(isset($edu->degree)) {
						$qualification = $edu->degree;
					}
					if(isset($linkedin->location)) {
						$location = $linkedin->location->name;
					}
					if(isset($edu->fieldOfStudy)) {
						$field_of_study = $edu->fieldOfStudy;
					}
					if(isset($edu->notes)) {
						$desc = $edu->notes;
					}
				}
			}

			//push into an array
			array_push($eduArray, array("schName"=>$schName, "end_date"=>$end_date
									,"qualification"=>$qualification, "location"=>$location
									, "field_of_study"=>$field_of_study, "desc"=>$desc)
			);

			//return the education array
			return $eduArray;
		}
		
		//the function to set friend's data
		public static function friendFilter($linkedin){
			
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
