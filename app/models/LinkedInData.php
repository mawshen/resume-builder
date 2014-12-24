<?php
	
	//function to return month in string 
	function get_month($month)
	{
		if($month==12) 
			return "Dec";
		else if($month==11) 
			return "Nov";
		else if($month==10) 
			return "Oct";
		else if($month==9) 
			return "Sept";
		else if($month==8) 
			return "Aug";
		else if($month==7) 
			return "Jul";
		else if($month==6) 
			return "Jun";
		else if($month==5) 
			return "May";
		else if($month==4) 
			return "Apr";
		else if($month==3) 
			return "Mar";
		else if($month==2) 
			return "Feb";
		else if($month==1) 
			return "Jan";
		else
			return "";
	}
		
	//model to filter data after get returned data from linked-in
	class linkedInData extends Eloquent{
		
		public $linkedInArray; 
		public $aboutArray;
		public $langArray;
		public $eduArray;
		public $skillArray;
		public $expArray;
		public $friendArray;
		public $candidateArray;
		
		public function __construct($linkedin){

			//initialization
			$this->linkedInArray = $aboutArray = $eduArray = $skillArray = $expArray = $friendArray = array();
			
			$this->aboutArray = $this->aboutFilter($linkedin);

			$this->langArray = $this->languageFilter($linkedin);
			
			$this->eduArray = $this->educationFilter($linkedin);

			$this->skillArray = $this->skillFilter($linkedin);

			$this->expArray = $this->experienceFilter($linkedin);

			$this->friendArray = $this->friendFilter($linkedin);
			
			$this->candidateArray = $this->candidateFilter($this->aboutArray, $this->eduArray, $this->expArray);

			
			//push into linkedinData array
			array_push($this->linkedInArray, array("aboutMe"=>$this->aboutArray, "education"=>$this->eduArray
									,"skill"=>$this->skillArray, "experience"=>$this->expArray, "friend"=>$this->friendArray)
			);

			return $this->linkedInArray;
		}//end of the constructor
		
		//function to return user's personal info
		public function get_about()
		{
			return json_encode($this->aboutArray);
		}
		
		//function to return user's language info
		public function get_lang()
		{
			return json_encode($this->langArray);
		}
		
		//function to return user's education info
		public function get_edu()
		{
			return json_encode($this->eduArray);
		}
		
		//function to return user's experience info
		public function get_exp()
		{
			return json_encode($this->expArray);
		}
		
		//function to return user's skill info
		public function get_skill()
		{
			return json_encode($this->skillArray);
		}
		
		//function to return candidate's summarize info
		public function get_candidate()
		{
			return json_encode($this->candidateArray);
		}
		
		//function to return user's friendList 
		public function get_friend()
		{
			return json_encode($this->friendArray);
		}
		
		//the function to set user's personal info
		public static function aboutFilter($linkedin){
			
			//initialize the about me fields
			$aboutArray=array();
			$dobDay = $dobMonth = $dobYear = $location = $picUrl = $mobile  = $otherNo = $email = 
			$gender = $firstName = $lastName = $identification = $identificationNo = "N/A";
			
			//initialize for resume builder
			$mobileCode = $phoneCode= "";
			$phoneArea = $phoneNo = $addressone = $addresstwo = $city = $postal = $state = "-";
			$country = $nationality = "Malaysia";
			
			//part to set DOB
			if(isset($linkedin->dateOfBirth)) {

				$dobDay = $linkedin->dateOfBirth->day;
				$dobMonth = $linkedin->dateOfBirth->month;
				$dobYear = $linkedin->dateOfBirth->year;
			}
			
			//part to set user's location
			if(isset($linkedin->location)) {

				$location = $linkedin->location->name;
				
				//split the location like Kuala Lumpur, Malaysia to array
				$tempState=explode(",", $location);
				//assign the state 
				$state=$tempState[0];

			}
			
			//part to set linked in profile pic
			if(isset($linkedin->pictureUrl)) {
				$picUrl=$linkedin->pictureUrl;
			}
			
			//part to set mobile no and other no
			if(isset($linkedin->phoneNumbers)) {
				if ($linkedin->phoneNumbers->_total>0){
					foreach($linkedin->phoneNumbers->values as $phone) {
						if($phone->phoneType = 'mobile') {
							$mobile = $phone->phoneNumber;
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
				$addressone = $linkedin->mainAddress;
			}

			//part to set first name
			if(isset($linkedin->firstName)) {
				$firstName = $linkedin->firstName;
			}
	
			//part to set last name
			if(isset($linkedin->lastName)) {
				$lastName = $linkedin->lastName;
			}
			
			//push into an array
			array_push($aboutArray, array("firstname"=>$firstName, "lastname"=>$lastName, "dobDay"=>$dobDay
									, "dobMonth"=>get_month($dobMonth), "dobYear"=>$dobYear, "location"=>$location, "gender"=>$gender
									, "picUrl"=>$picUrl, "mobileCode"=>$mobileCode, "mobile"=>$mobile, "otherNo"=>$otherNo
									, "phoneCode"=>$phoneCode, "phoneArea"=>$phoneArea, "phoneNo"=>$phoneNo
									, "email"=>$email, "addressone"=>$addressone, "addresstwo"=>$addresstwo
									, "city"=>$city, "postal"=>$postal, "state"=>$state, "country"=>$country
									, "nationality"=>$nationality, "identification"=>$identification, "identificationNo"=>$identificationNo)
			);

			//return the about me
			return $aboutArray;
		}//end of function aboutFilter
		
		
		//the function to set user's language info
		public static function languageFilter($linkedin){
			
			//initialize the language fields
			$langArray=array();
			
			//part to set language
			if(isset($linkedin->languages)) {
			
				foreach($linkedin->languages->values as $lang) {
					//push into an array
					array_push($langArray, array("name"=>$lang->language->name, "primary"=>"", "spoken"=>"10"
									, "written"=>"10", "cert"=>"-", "result"=>""));
				}
			}

			//return the language array
			return $langArray;
		}//end of function languageFilter
		
		
		//the function to set user's education info
		public static function educationFilter($linkedin){
			
			//initialize the education fields
			$eduArray=array();
			
			if(isset($linkedin->educations)) {
			
				foreach($linkedin->educations->values as $edu) {
					
					//initialize the education fields
					$university =  $gradMonth = $gradYear = $qualification = $universitylocation = $fieldofstudy = $major = $grade = $addinformation = "";
					
					if(isset($edu->schoolName)) {
						$university = $edu->schoolName;
					}
					if(isset($edu->endDate)) {
						
						$gradYear = $edu->endDate->year;
					}
					if(isset($edu->degree)) {
						$qualification = $edu->degree;
					}

					if(isset($edu->fieldOfStudy)) {
						$fieldofstudy = $edu->fieldOfStudy;
					}
					if(isset($edu->notes)) {
						$addinformation = $edu->notes;
					}
					
					//push into an array
					array_push($eduArray, array("university"=>$university, "gradMonth"=>get_month($gradMonth), "gradYear"=>$gradYear
											, "qualification"=>$qualification, "universitylocation"=>$universitylocation
											, "fieldofstudy"=>$fieldofstudy, "major"=>$major, "grade"=>"0.00", "addinformation"=>$addinformation)
					);
				
				}

			}

			//return the education array
			return $eduArray;
		}//end of function educationFilter
		
		//the function to set user's skill info
		public static function skillFilter($linkedin){
			
			//initialize the skill fields
			$skillArray=array();

			if(isset($linkedin->skills->values)) {

				foreach($linkedin->skills->values as $skill) {

					//initialize the value to null
					$skillName = "";

					if(isset($skill->skill->name)) {
						$skillName = $skill->skill->name;
					}
					
					//push into an array
					array_push($skillArray, array("name"=>$skillName, "pro"=>"Advanced"));
					
				}//end of foreach loop to set the data
				
			}

			//return the skill array
			return $skillArray;
		}//end of function skillFilter
		

		//the function to set user's experience info
		public static function experienceFilter($linkedin){
			
			//initialize the experience fields
			$expArray=array();
			
			/****************************   temporary removed
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
			********************************************************************************************************************/

			if(isset($linkedin->positions)) {
				foreach($linkedin->positions->values as $exp) {
					
					//initialize the experience fields
					$position = $company = $location = $startMonth = $startYear = $endMonth = $endYear = $duration = $industry = $achievement =
					$pLevel = $salary = $specialization = "";
					$currency = "MYR";
					
					if(isset($exp->title)) {
						$position = $exp->title;
						/****************************   temporary removed
						//tommy added here to retrieve specialization code and name from js api
						$specialization=get_specialization($position);
						********************************************************************************************************************/
					}
					if(isset($exp->startDate)) {
						$startMonth = $exp->startDate->month;
						$startYear = $exp->startDate->year;
					}else{
						//temporary put like this
						$startMonth = 12;
						$startYear = 2014;
					}
					
					if(isset($exp->endDate)) {
						
						$endMonth =  $exp->endDate->month;
						$endYear = $exp->endDate->year;
						
						
					} elseif(isset($exp->isCurrent)) {
						//please use current time function to get current month and year later
						$endMonth =  12;
						$endYear = 2014;
					}
					
					//calculate duration month
					$duration = ($endYear*12+$endMonth)-($startYear*12+$startMonth);
					if ($duration==0)
						$duration="N/A";
					else{
						
						if ($duration>12){
							$duration = ((int)($duration/12)). " year(s) and ".($duration%12)." month(s)";
						}
						else{
							$duration = ($duration)." month(s)";
						}
						
					}
						
					
					if(isset($exp->company)) {
						$company = $exp->company->name;
					}
					
					if(isset( $exp->company->industry)) {
						$industry = $exp->company->industry;
					} elseif(isset($linkedin->industry)) {
						$industry = $linkedin->industry;
					}
				
					if(isset($exp->summary)) {
						$achievement = $exp->summary;
					}

					//push into an array
					array_push($expArray, array("position"=>$position, "company"=>$company, "startMonth"=>get_month($startMonth) , "startYear"=>$startYear 
											, "endMonth"=>get_month($endMonth) , "endYear"=>$endYear , "duration"=>$duration
											, "specialization"=>$specialization, "location"=>$location, "industry"=>$industry
											, "pLevel"=>$pLevel, "currency"=>"", "salaray"=>$salary, "achievement"=>$achievement)
					);
				}//end of foreach loop to set the data
			}//end of isset positions data

			//return the experience array
			return $expArray;
		}//end of function experienceFilter
		
		//the function to set candidate summarized info
		public static function candidateFilter($aboutArray, $eduArray, $expArray){
			
			//initialize the candidate summarized fields
		
			$skillArray=array("tag"=>"Skills", "label"=>"", "value"=>"" );
			$beginnerSkillArray=array("tag"=>"Skills", "label"=>"Beginner", "value"=>"");
			$intermediateSkillArray=array("tag"=>"Skills", "label"=>"Intermediate", "value"=>"");
			$advancedSkillArray=array("tag"=>"Skills", "label"=>"Advance", "value"=>"");
			$langArray=array("tag"=>"Languages", "label"=>"", "value"=>"");
			$addInfoArray=array("tag"=>"Additional Information", "label"=>"", "value"=>"");
			$salaryArray=array("tag"=>"Additional Information", "label"=>"Expected Salary", "value"=>"N/A");
			$preferWorkArray=array("tag"=>"Additional Information", "label"=>"Preferred Work Locations", "value"=>$aboutArray[0]['state']);
			$otherInfoArray=array("tag"=>"Additional Information", "label"=>"Other Information", "value"=>"");
			
			$aboutMeArray=array("tag"=>"About Me", "label"=>"Telephone Number", "value"=>"N/A");


			$fNameArray=array("tag"=>"Name", "label"=>"First Name", "value"=>$aboutArray[0]['firstname']);
			$lNameArray=array("tag"=>"Name", "label"=>"Last Name", "value"=>$aboutArray[0]['lastname']);
			$genderArray=array("tag"=>"Name", "label"=>"Gender", "value"=>$aboutArray[0]['gender']);
			$ageArray=array("tag"=>"About Me", "label"=>"Age", "value"=>(date("Y")-$aboutArray[0]['dobYear']));
			$emailArray=array("tag"=>"About Me", "label"=>"Email", "value"=>$aboutArray[0]['email']);
			$nationalityArray=array("tag"=>"Nationality", "label"=>"Nationality", "value"=>$aboutArray[0]['nationality']);
			$locationArray=array("tag"=>"About Me", "label"=>"Address", "value"=>$aboutArray[0]['state']);
			
			$positionArray=array("tag"=>"Position", "label"=>"Position", "value"=>$expArray[0]['position']);
			$companyArray=array("tag"=>"Company", "label"=>"Current Company", "value"=>$expArray[0]['company']);
			
			if($expArray[1]){
				$prePositionArray=array("tag"=>"Previous", "label"=>"Previous Position", "value"=>$expArray[1]['position']);
				$preCompanyArray=array("tag"=>"Previous", "label"=>"Previous Company", "value"=>$expArray[1]['company']);
			}else{
				$prePositionArray=array("tag"=>"Previous", "label"=>"Previous Position", "value"=>"");
				$preCompanyArray=array("tag"=>"Previous", "label"=>"Previous Company", "value"=>"");
			}
			
			if($expArray[0]['startYear'])
				$expYearArray=array("tag"=>"Experience", "label"=>"Experience", "value"=>$expArray[0]['duration']);
			else
				$expYearArray=array("tag"=>"Experience", "label"=>"Experience", "value"=>"N/A");
			
			$uniArray=array("tag"=>"Education", "label"=>"University", "value"=>$eduArray[0]['university']);
			$qualificationArray=array("tag"=>"Education", "label"=>"Qualification", "value"=>$eduArray[0]['qualification']);
			$fosArray=array("tag"=>"Education", "label"=>"Field of Study", "value"=>$eduArray[0]['fieldofstudy']);
			
			//return the candidate array
			return array("skills"=>$skillArray, "beginner"=>$beginnerSkillArray, "intermediate"=>$intermediateSkillArray
											, "advanced"=>$advancedSkillArray, "language"=>$langArray, "addinformation"=>$addInfoArray, "salary"=>$salaryArray
											, "workLocation"=>$preferWorkArray, "otherinformation"=>$otherInfoArray, "about"=>$aboutMeArray, "firstname"=>$fNameArray
											, "lastname"=>$lNameArray, "gender"=>$genderArray, "age"=>$ageArray, "email"=>$emailArray
											, "nationality"=>$nationalityArray, "mylocation"=>$locationArray, "position"=>$positionArray, "company"=>$companyArray
											, "pposition"=>$prePositionArray, "pcompany"=>$preCompanyArray, "experience"=>$expYearArray, "university"=>$uniArray
											, "qualification"=>$qualificationArray, "fieldofstudy"=>$fosArray);


		}//end of function candidateFilter
		
		//the function to set friend's data
		public static function friendFilter($linkedin){
			
			//initialize the friend array
			$friendArray=array();
			
			//if get the connection data 
			if(isset($linkedin->connections)) {
				
				//foreach loop to set the data
				foreach($linkedin->connections->values as $friend) {

					//initialization
					$firstName = $lastName = $headline = $industry = $workLocation = $picUrl = $linkedInUrl="";
					
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
