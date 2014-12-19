<?php
	//model to filter data after get returned data from linked-in
	class linkedInData extends Eloquent{

		//the function to set user's personal info
		public static function aboutFilter($linkedin){
			
			//initialize the about me fields
			$aboutArray=array();
			$dob = $mobileNo = $otherNo =$email = $address = $first_name = $last_name = $language = null;
			
			//part to set DOB
			if(isset($linkedin->dateOfBirth)) {
				$dob = $linkedin->dateOfBirth;
				$dob = $dob->day.'/'.$dob->month.'/'.$dob->year;
			}

			//part to set mobile no and other no
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

			//part to set email add
			if(isset($linkedin->emailAddress)) {
				$email = $linkedin->emailAddress;
			}

			//part to set home add
			if(isset($linkedin->mainAddress)) {
				$address = $linkedin->mainAddress;
			}

			//part to set first name
			if(isset($linkedin->firstName)) {
				$first_name = $linkedin->firstName;
			}
	
			//part to set last name
			if(isset($linkedin->lastName)) {
				$last_name = $linkedin->lastName;
			}

			
			//part to set language
			if(isset($linkedin->languages)) {
			
				//initialize the language value
				$language="";
				
				foreach($linkedin->languages->values as $lang) {
					$language .= ",".$lang->language->name;
				}
				
				$language = substr($language,1);

			}
			
			//push into an array
			array_push($aboutArray, array("firstName"=>$first_name, "lastName"=>$last_name
									,"dob"=>$dob, "mobileNo"=>$mobileNo, "otherNo"=>$otherNo
									, "email"=>$email, "address"=>$address, "lang"=>$language)
			);

			//return the about me
			return $aboutArray;
		}//end of function aboutFilter
		
		//the function to set user's education info
		public static function educationFilter($linkedin){
			
			//initialize the education fields
			$eduArray=array();
			
			
			if(isset($linkedin->educations)) {
			
				foreach($linkedin->educations->values as $edu) {
					
					//initialize the education fields
					$schName =  $end_date = $qualification = $location = $field_of_study = $desc = null;
					
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
		}//end of function educationFilter
		
		//the function to set user's experience info
		public static function experienceFilter($linkedin){
			
			//initialize the experience fields
			$expArray=array();
			
			//this is the function to get specialization code and name from js api
			function get_specialization($position){
				
				//codes to retrieve data from JS API
				$app_key="myjslocalid";
				$position=urlencode($position);
				$url="http://api.sand.jobstreet.com:80/v/recommendations/specializations-roles-for-position-title?position_title=".$position.
				"&api_key=".$app_key;
				
				//set the specialization by returned data
				$specialization = file_get_contents($url);
				
				//if data not null, return the values
				if ($specialization){
					
					//convert string to json
					$specialization=json_decode($specialization);
					
					//return the value
					return $specialization->data[0]->specialization;

				}else{
					return null;
				}
			}//end of function to get_specialization

			if(isset($linkedin->positions)) {
				foreach($linkedin->positions->values as $exp) {
					
					//initialize the experience year
					$position = $company = $location = $duration = $industry = $summary = null;
					
					if(isset($exp->title)) {
						$position = $exp->title;
						
						//tommy added here to retrieve specialization code and name from js api
						$specialization=get_specialization($position);
					}
					$duration = $exp->startDate->month.'/'.$exp->startDate->year;
					
					if(isset($exp->endDate)) {
						$duration .= ' - '.$exp->endDate->month.'/'.$exp->endDate->year;
					} elseif(isset($exp->isCurrent)) {
						$duration .= ' - Present';
					}
					
					if(isset($exp->company)) {
						$company = $exp->company->name;
					}
					
					if(isset($linkedin->location)) {
						$location = $linkedin->location->name;
					}
					
					if(isset( $exp->company->industry)) {
						$industry = $exp->company->industry;
					} elseif(isset($linkedin->industry)) {
						$industry = $linkedin->industry;
					}
				
					if(isset($exp->summary)) {
						$summary = $exp->summary;
					}
					
					//push into an array
					array_push($expArray, array("position"=>$position, "specialization"=>$specialization
											, "company"=>$company, "duration"=>$duration, "location"=>$location
											, "industry"=>$industry, "summary"=>$summary)
					);
				}//end of foreach loop to set the data
			}//end of isset positions data

			//return the experience array
			return $expArray;
		}//end of function experienceFilter
		
		//the function to set friend's data
		public static function friendFilter($linkedin){
			
			//initialize the friend array
			$friendArray=array();
			
			//if get the connection data 
			if(isset($linkedin->connections)) {
				
				//foreach loop to set the data
				foreach($linkedin->connections->values as $friend) {

					//initialization
					$firstName = $lastName = $headline = $industry = $workLocation = $picUrl = $linkedInUrl=null;
					
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

				}//end of foreach loop to set the data
			}

			//return the friend array made
			return $friendArray;
			
		}//end of function friendFilter

	}//end of class linkedInData
?>
