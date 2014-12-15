define(['appModule'], function(app) {

    app.controller('PreviewController', function($rootScope, $scope, $http, $sce) {
        /**
         * @description:
         * $rootScope switch contain the add/editable form's state.
         */
        $rootScope.editSwitch = false;
        $rootScope.expAddFormSwitch = false;
        $rootScope.expEditFormSwitch = false;
        $rootScope.eduAddFormSwitch = false;
        $rootScope.eduEditFormSwitch = false;
        $rootScope.skillFormSwitch = false;
        $rootScope.skillInfoSwitch = true;
        $rootScope.langFormSwitch = false;
        $rootScope.langInfoSwitch = true;
        $rootScope.addInfoFormSwitch = false;
        $rootScope.addInfoSwitch = true;
        $rootScope.aboutmeFormSwitch = false;
        $rootScope.aboutmeInfoSwitch = true;
        $rootScope.menuSwitch = true;
        $rootScope.doneSwitch = false;



        $scope.controlDirFunction = {
        };

        $scope.checkResult = function(showIn) {
            if ($rootScope.showMe === showIn) {
                $rootScope.answer = 1;
            } else {
                $rootScope.answer = 0;
            }
        };

        $scope.xxyy = function(thisI) {
            alert(thisI);
            $rootScope.showMe = thisI;
            alert($scope.showMe);
        };
        /**
         * @description:
         * This scope used to access the functions inside different directives.
         */


        /**
         * @description:
         * This function linked with the "Done Editing" button. Once click all current active form will be cancel and terminated. No result will be saved.
         */
        $rootScope.cancelAllEditor = function() {
            if ($rootScope.expAddFormSwitch === true) {
                $scope.toggleExpAddForm();
                $scope.toggleEditBtn();
                $scope.controlDirFunction.cancelExpEdit();
            } else if ($rootScope.expEditFormSwitch === true) {
                $scope.toggleExpEditForm();
                $scope.toggleEditBtn();
                $scope.controlDirFunction.cancelExpEdit();
            } else if ($rootScope.eduEditFormSwitch === true) {
                $scope.toggleEduEditForm();
                $scope.toggleEditBtn();
                $scope.controlDirFunction.cancelEduEdit();
            } else if ($rootScope.eduAddFormSwitch === true) {
                $scope.toggleEduAddForm();
                $scope.toggleEditBtn();
                $scope.controlDirFunction.cancelEduEdit();
            } else if ($rootScope.skillFormSwitch === true) {
                $scope.controlDirFunction.cancelSkillEdit();
            } else if ($rootScope.langFormSwitch === true) {
                $scope.controlDirFunction.cancelLang();
            } else if ($rootScope.addInfoFormSwitch === true) {
                $scope.controlDirFunction.cancelAddinfo();
            } else if ($rootScope.aboutmeFormSwitch === true) {
                $scope.controlDirFunction.cancelAboutme();
            }
        };

        /**
         * @description:
         * Functions control all section's add/editable form to show and hide.
         */
        $scope.toggleEditBtn = function() {
            $rootScope.editSwitch = !$rootScope.editSwitch;
        };
        $scope.toggleMenu = function() {
            $rootScope.doneSwitch = !$rootScope.doneSwitch;
            $rootScope.menuSwitch = !$rootScope.menuSwitch;
        };
        $scope.toggleExpAddForm = function() {
            $rootScope.expAddFormSwitch = !$rootScope.expAddFormSwitch;
        };
        $scope.toggleExpEditForm = function() {
            $rootScope.expEditFormSwitch = !$rootScope.expEditFormSwitch;
        };
        $scope.toggleHideThis = function() {
            $rootScope.hideThis = !$rootScope.hideThis;
        };
        $scope.toggleEduAddForm = function() {
            $rootScope.eduAddFormSwitch = !$rootScope.eduAddFormSwitch;
        };
        $scope.toggleEduEditForm = function() {
            $rootScope.eduEditFormSwitch = !$rootScope.eduEditFormSwitch;
        };
        $scope.toggleSkillForm = function() {
            $rootScope.skillFormSwitch = !$rootScope.skillFormSwitch;
        };
        $scope.toggleSkillInfo = function() {
            $rootScope.skillInfoSwitch = !$rootScope.skillInfoSwitch;
        };
        $scope.toggleLangForm = function() {
            $rootScope.langFormSwitch = !$rootScope.langFormSwitch;
        };
        $scope.toggleLangInfo = function() {
            $rootScope.langInfoSwitch = !$rootScope.langInfoSwitch;
        };
        $scope.toggleAddinfoForm = function() {
            $rootScope.addInfoFormSwitch = !$rootScope.addInfoFormSwitch;
        };
        $scope.toggleAddInfo = function() {
            $rootScope.addInfoSwitch = !$rootScope.addInfoSwitch;
        };
        $scope.toggleAboutmeForm = function() {
            $rootScope.aboutmeFormSwitch = !$rootScope.aboutmeFormSwitch;
        };
        $scope.toggleAboutmeInfo = function() {
            $rootScope.aboutmeInfoSwitch = !$rootScope.aboutmeInfoSwitch;
        };

        /**
         * @description:
         * Form expander for "Experience" and "Education" section. Only show in small device and mobile version.
         */
//        $(function() {
//            $("#btnExp-tooltip").tooltip();
//        });
//        $(function() {
//            $("#btnEdu-tooltip").tooltip();
//        });
        $scope.getDTime = function() {
            var d = new Date();
            var n = d.getTime();
            return n;
        };

        /**
         * @description:
         * Get the latest date. **Just for testing purpose. Can be delete.**
         */
        $scope.getUpdate = function() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth(); //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }

            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            today = dd + ' ' + monthNames[mm] + ' ' + yyyy;
            return today;
        };
        $scope.lastUpdate = $scope.getUpdate();

        $scope.returnShowMe = function() {
            return $scope.showMe;
        };

        $scope.editMyExperience = function(passIndex, userPosition, userCompany, userLocation) {
            $scope.hideExp = passIndex;
            $scope.showExpEdit = passIndex;

//            if ($scope.$$phase) { // most of the time it is "$digest"
//                $scope.showExpEdit = passIndex;
//            } else {
//                $scope.$apply($scope.showExpEdit = passIndex);
//            }

//            $scope.runT();

//$scope.$watch($scope.showExpEdit);
            $scope.$apply();
            
            $scope.controlDirFunction.getUserExp(passIndex, userPosition, userCompany, userLocation);
            $scope.controlDirFunction.controlDelete();
        };

        $scope.runT = function() {
            $scope.$apply(function() {
            });
        };

        $scope.checkMe = function(rv) {
            if ($scope.showExpEdit === rv)
                return true;
        };

        $scope.editMyEducation = function(passIndex, userUniversity, userQualification, userFieldofstudy) {
            $scope.hideEdu = passIndex;
            $scope.showEduEdit = passIndex;

            try {
                $scope.$apply();
            } catch (e) {
                throw (e);
            }

            $scope.controlDirFunction.getUserEdu(passIndex, userUniversity, userQualification, userFieldofstudy);
            $scope.controlDirFunction.controlEduDelete();
        };

        /**
         * @description:
         * Function to work with ng-bind-html. Convert html into readable content.
         */
        $scope.getHtml = function(html) {
            return $sce.trustAsHtml(html);
        };

//    $scope.expIndex;
//
//    $scope.deleteEdu = function(index) {
//        $scope.userEdu.splice(index, 1);
//    };
//    $scope.deleteLang = function(index) {
//        $scope.userLang.splice(index, 1);
//    };
//    $scope.deleteAddInfo = function(index) {
//        $scope.userAddInfo.splice(index, 1);
//    };
//    $scope.deleteAbout = function(index) {
//        $scope.userAbout.splice(index, 1);
//    };
//
//    $scope.intLang = function() {
//        $http.get('js/language.JSON' + '?=' + $scope.getDTime()).success(function(data) {
//            $scope.userLang = data;
//        });
//    };
//    $scope.intAInfo = function() {
//        $http.get('js/additionalInformation.JSON' + '?=' + $scope.getDTime()).success(function(data) {
//            $scope.userAddInfo = data;
//        });
//    };
//    $scope.intAbout = function() {
//        $http.get('js/about.JSON' + '?=' + $scope.getDTime()).success(function(data) {
//            $scope.userAbout = data;
//        });
//    };

//    $scope.initiate = function() {
//        $scope.intSkill();
//        $scope.intLang();
//        $scope.intAInfo();
//        $scope.intAbout();
//    };
//
//    $scope.initiate();


        /**
         * @description:
         * JSON data for adding a New Experience
         */
        $scope.userExpNew = {
            position: '',
            company: '',
            startMonth: '',
            startYear: '',
            endMonth: '',
            endYear: '',
            duration: '',
            specialization: '',
            location: '',
            industry: '',
            pLevel: '',
            currency: '',
            salary: '',
            achievement: ''
        };

        /**
         * @description:
         * JSON data for adding a New Education
         */
        $scope.userEduNew = {
            uID: '',
            university: '',
            gradMonth: '',
            gradYear: '',
            qualification: '',
            fieldofstudy: '',
            major: '',
            grade: '',
            universitylocation: '',
            addinformation: ''
        };

        /**
         * @description:
         * JSON data for adding a New Skill
         */
        $scope.userSkillNew = [];

        /**
         * @description:
         * JSON data for adding a New Language
         */
        $scope.userLangNew = [];

        /**
         * @description:
         * JSON data for adding a New Additional Information
         */
        $scope.userNewAddinfo = {
            expectedCurrency: '',
            expectedSalary: '',
            preferredWorkLocationOne: '',
            preferredWorkLocationTwo: '',
            preferredWorkLocationThree: '',
            workingOverSea: '',
            otherInformation: ''
        };

        /**
         * @description:
         * JSON data for adding a New About Me
         */
        $scope.userNewAboutme = {
            firstname: '',
            lastname: '',
            dobDay: '',
            dobMonth: '',
            dobYear: '',
            gender: '',
            mobileCode: '',
            mobile: '',
            phoneCode: '',
            phoneArea: '',
            phoneNo: '',
            email: '',
            addressone: '',
            addresstwo: '',
            city: '',
            postal: '',
            state: '',
            country: '',
            nationality: '',
            identification: '',
            identificationNo: ''
        };

        /**
         * @description:
         * Push newly added Experience into the previous array.
         */
        $scope.addExp = function() {
            $scope.userExp.push($scope.userExpNew);
            $scope.userExpNew = {
                position: '',
                company: '',
                startMonth: '',
                startYear: '',
                endMonth: '',
                endYear: '',
                duration: '',
                specialization: '',
                location: '',
                industry: '',
                pLevel: '',
                currency: '',
                salary: '',
                achievement: ''
            };
        };

//    $scope.popExp = function() {
//        $scope.userExp.pop();
//    };

        /**
         * @description:
         * Push newly added Education into the previous array.
         */
        $scope.addEdu = function() {
            $scope.userEdu.push($scope.userEduNew);
            $scope.userEduNew = {
                uID: '',
                university: '',
                gradMonth: '',
                gradYear: '',
                qualification: '',
                fieldofstudy: '',
                major: '',
                grade: '',
                universitylocation: '',
                addinformation: ''
            };
        };

//    $scope.popEdu = function() {
//        $scope.userEdu.pop();
//    };


        $scope.clearSkill = function() {
            $scope.userSkill = [];
        };

        $scope.clearLang = function() {
            $scope.userLanguage = [];
        };

        /**
         * @description:
         * Push newly added Skill into the previous array.
         */
        $scope.addSkill = function() {
            $scope.clearSkill();
            for (var xe = 0; xe < $scope.userSkillNew.length; xe++) {
                $scope.userSkill.push($scope.userSkillNew[xe]);
            }
        };

        /**
         * @description:
         * Push newly added Language into the previous one.
         */
        $scope.addLang = function() {
            $scope.clearLang();
            for (var xl = 0; xl < $scope.userLangNew.length; xl++) {
                $scope.userLanguage.push($scope.userLangNew[xl]);
            }
        };

        $scope.clearAddinfo = function() {
            $scope.userAdditionalInfo = [];
        };

        /**
         * @description:
         * Push newly added Additional Info into the previous one.
         */
        $scope.addAddinfo = function() {
            $scope.clearAddinfo();
            $scope.userAdditionalInfo.push($scope.userNewAddinfo);
        };
        $scope.clearAboutme = function() {
            $scope.userAboutMe = [];
        };

        /**
         * @description:
         * Push newly added About into the previous one.
         */
        $scope.addAboutme = function() {
            $scope.clearAboutme();
            $scope.userAboutMe.push($scope.userNewAboutme);
        };

        /**
         * @description:
         * JSON data for labels and Summary Section
         */
        $scope.resetJSON = function() {
            $scope.candidate = {
                position: {
                    tag: 'Position',
                    label: 'Position',
                    value: 'Manager, Instructional Design'
                },
                company: {
                    tag: 'Company',
                    label: 'Current Company',
                    value: 'Scicom (MSC) Berhad'
                },
                pposition: {
                    tag: 'Previous',
                    label: 'Previous Position',
                    value: 'Consultant (Interactive Multimedia/SME)'
                },
                pcompany: {
                    tag: 'Previous',
                    label: 'Previous Company',
                    value: 'Nadi-Ayu Technologies Sdn Bhd'
                },
                experience: {
                    tag: 'Experience',
                    label: 'Experience',
                    value: '2 Years'
                },
                university: {
                    tag: 'Education',
                    label: 'University',
                    value: 'Universiti Kebangsaan Malaysia (UKM)'
                },
                qualification: {
                    tag: 'Education',
                    label: 'Qualification',
                    value: 'Bachelor Degree (Ijazah Sarjana Muda)'
                },
                fieldofstudy: {
                    label: 'Field of Study',
                    value: 'Finance/Accountancy/Banking'
                },
                skills: {
                    tag: 'Skills',
                    label: '',
                    value: ''
                },
                beginner: {
                    tag: 'Skills',
                    label: 'Beginner',
                    value: ''
                },
                intermediate: {
                    tag: 'Skills',
                    label: 'Intermediate',
                    value: ''
                },
                advanced: {
                    tag: 'Skills',
                    label: 'Advanced',
                    value: ''
                },
                language: {
                    tag: 'Languages',
                    label: '',
                    value: ''
                },
                addinformation: {
                    tag: 'Additional Information',
                    label: '',
                    value: ''
                },
                salary: {
                    tag: 'Additional Information',
                    label: 'Expected Salary',
                    value: ''
                },
                workLocation: {
                    tag: 'Additional Information',
                    label: 'Preferred Work Locations',
                    value: ''
                },
                otherinformation: {
                    tag: 'Additional Information',
                    label: 'Other Information',
                    value: ''
                },
                about: {
                    tag: 'About Me',
                    label: 'Telephone Number',
                    value: '(+84) 01-5629312'
                },
                firstname: {
                    tag: 'Name',
                    label: 'First Name',
                    value: 'Ivy'
                },
                lastname: {
                    tag: 'Name',
                    label: 'Last Name',
                    value: 'Ong'
                },
                gender: {
                    tag: 'Name',
                    label: 'Gender',
                    value: ''
                },
                age: {
                    tag: 'About Me',
                    label: 'Age',
                    value: '30 Years Old'
                },
                email: {
                    tag: 'About Me',
                    label: 'Email',
                    value: 'test@test.com'
                },
                nationality: {
                    tag: 'Nationality',
                    label: 'Nationality',
                    value: 'Malaysia'
                },
                mylocation: {
                    tag: 'About Me',
                    label: 'Address',
                    value: 'Petaling, Jaya'
                }
            };

            /**
             * @description:
             * JSON data for Experience Section
             */
            $scope.userExp = [
                {
                    position: 'General Manager, Head of Design',
                    company: 'Oriental Daily News',
                    startMonth: 'Jan',
                    startYear: '2013',
                    endMonth: 'Jul',
                    endYear: '2014',
                    duration: '19',
                    specialization: 'Arts/Creative Design',
                    location: 'Singapore',
                    industry: "Advertising / Marketing / Promotion / PR",
                    pLevel: 'Senior Manager',
                    currency: 'MYR',
                    salary: '10001-15000',
                    achievement: 'Contributed in the development of corporate training modules for SMECorp.'
                },
                {
                    position: 'Manager, Instructional Design',
                    company: 'Scicom (MSC) Berhad',
                    startMonth: 'Mar',
                    startYear: '2012',
                    endMonth: 'Aug',
                    endYear: '2012',
                    duration: '6',
                    specialization: 'Advertising',
                    location: 'Kuala Lumpur',
                    industry: 'Telecommunication',
                    pLevel: 'Manager',
                    currency: 'MYR',
                    salary: '8001-9000',
                    achievement: '<ul class=\"no-listyle\"><li>Training Modules Design and Development</li><ul><li>Currently working on the development of Entrepreneur Graduate Career Accelerated Programme modules.</li></ul></li><br/><li>Contributed in the development of corporate training modules for SMECorp.</li></ul>'
                },
                {
                    position: 'Manager3, Instructional Design',
                    company: 'Scicom (MSC) Berhad',
                    startMonth: 'Mar',
                    startYear: '2012',
                    endMonth: 'Aug',
                    endYear: '2012',
                    duration: '6',
                    specialization: 'Advertising',
                    location: 'Kuala Lumpur',
                    industry: 'Telecommunication',
                    pLevel: 'Manager',
                    currency: 'MYR',
                    salary: '8001-9000',
                    achievement: '<ul class=\"no-listyle\"><li>Training Modules Design and Development</li><ul><li>Currently working on the development of Entrepreneur Graduate Career Accelerated Programme modules.</li></ul></li><br/><li>Contributed in the development of corporate training modules for SMECorp.</li></ul>'
                },
                {
                    position: 'Manager4, Instructional Design',
                    company: 'Scicom (MSC) Berhad',
                    startMonth: 'Mar',
                    startYear: '2012',
                    endMonth: 'Aug',
                    endYear: '2012',
                    duration: '6',
                    specialization: 'Advertising',
                    location: 'Kuala Lumpur',
                    industry: 'Telecommunication',
                    pLevel: 'Manager',
                    currency: 'MYR',
                    salary: '8001-9000',
                    achievement: '<ul class=\"no-listyle\"><li>Training Modules Design and Development</li><ul><li>Currently working on the development of Entrepreneur Graduate Career Accelerated Programme modules.</li></ul></li><br/><li>Contributed in the development of corporate training modules for SMECorp.</li></ul>'
                }
            ];



            /**
             * @description:
             * JSON data for Education Section
             */
            $scope.userEdu = [
                {
                    university: 'Universiti Kebangsaan Malaysia (UKM)',
                    gradMonth: 'May',
                    gradYear: '2011',
                    qualification: "Bachelor's Degree",
                    fieldofstudy: 'Finance/Accountancy/Banking',
                    major: 'Finance',
                    grade: '1st Class',
                    universitylocation: 'Malaysia',
                    addinformation: 'Lorem ipsum dolor sit amet, est in ultrices sit praesent euismod, quis metus tellus vitae nonummy ut, vehicula eu nunc donec tempus curabitur, pulvinar vivamus sit sed sed. Et tellus ante ante, bibendum erat fringilla felis, suspendisse taciti nonummy urna, eu egestas placerat id mauris velit wisi, arcu velit turpis. Integer augue. Amet sed fermentum venenatis vel.'
                },
                {
                    university: 'Universiti 2',
                    gradMonth: 'May',
                    gradYear: '2011',
                    qualification: "Bachelor's Degree",
                    fieldofstudy: 'Finance/Accountancy/Banking',
                    major: 'Finance',
                    grade: '1st Class',
                    universitylocation: 'Malaysia',
                    addinformation: 'Lorem ipsum dolor sit amet, est in ultrices sit praesent euismod, quis metus tellus vitae nonummy ut, vehicula eu nunc donec tempus curabitur, pulvinar vivamus sit sed sed. Et tellus ante ante, bibendum erat fringilla felis, suspendisse taciti nonummy urna, eu egestas placerat id mauris velit wisi, arcu velit turpis. Integer augue. Amet sed fermentum venenatis vel.'
                },
                {
                    university: 'Universiti 3',
                    gradMonth: 'May',
                    gradYear: '2011',
                    qualification: "Bachelor's Degree",
                    fieldofstudy: 'Finance/Accountancy/Banking',
                    major: 'Finance',
                    grade: '1st Class',
                    universitylocation: 'Malaysia',
                    addinformation: 'Lorem ipsum dolor sit amet, est in ultrices sit praesent euismod, quis metus tellus vitae nonummy ut, vehicula eu nunc donec tempus curabitur, pulvinar vivamus sit sed sed. Et tellus ante ante, bibendum erat fringilla felis, suspendisse taciti nonummy urna, eu egestas placerat id mauris velit wisi, arcu velit turpis. Integer augue. Amet sed fermentum venenatis vel.'
                }
            ];

            /**
             * @description:
             * JSON data for Skill Section
             */

            $scope.userSkill = [
                {
                    pro: 'Advanced',
                    name: 'Adobe Photoshop'
                },
                {
                    pro: 'Advanced',
                    name: 'Adobe Dreamweaver'
                },
                {
                    pro: 'Advanced',
                    name: 'CorelDRAW'
                },
                {
                    pro: 'Advanced',
                    name: 'Project Management'
                },
                {
                    pro: 'Intermediate',
                    name: 'Auto CAD'
                },
                {
                    pro: 'Intermediate',
                    name: 'Auto Desk 3D MAX'
                },
                {
                    pro: 'Beginner',
                    name: 'Vegas Pro'
                }
            ];

            /**
             * @description:
             * JSON data for Language Section
             */
            $scope.userLanguage = [
                {
                    name: 'English',
                    primary: '',
                    spoken: '10',
                    written: '10',
                    cert: '-',
                    result: ''
                },
                {
                    name: 'Bahasa Malaysia',
                    primary: '',
                    spoken: '7',
                    written: '7',
                    cert: 'MUET',
                    result: 'A'
                },
                {
                    name: 'Chinese',
                    primary: '(Primary)',
                    spoken: '10',
                    written: '10',
                    cert: '-',
                    result: ''
                }
            ];

            /**
             * @description:
             * JSON data for Additional Information Section
             */
            $scope.userAdditionalInfo = [
                {
                    expectedCurrency: 'MYR',
                    expectedSalary: '15,000',
                    preferredWorkLocationOne: 'Kuala Lumpur',
                    preferredWorkLocationTwo: 'Penang',
                    preferredWorkLocationThree: 'Anywhere in Malaysia',
                    workingOverSea: 'Yes',
                    otherInformation: 'CAREER OBJECTIVE:<br/>To contribute positively to Company growth, sustainability and profitability while enriching personal career exposures and experiences. My goal is to continue my career pursuit in the lines of Project Management and Communications & Content Planning and Development.<br/><br/>PERSONAL ATTRIBUTES:<br/>Charismatic and responsible when leading a group/team.<br/>Strong analytic and diagnostic skills.<br/>Able to work independently or in a group/team.'
                }
            ];

            /**
             * @description:
             * JSON data for About Me Section
             */
            $scope.userAboutMe = [
                {
                    firstname: 'Ivy',
                    lastname: 'Ong',
                    dobDay: '8',
                    dobMonth: 'Aug',
                    dobYear: '1988',
                    gender: 'Female',
                    mobileCode: '60',
                    mobile: '188888888',
                    phoneCode: '',
                    phoneArea: '-',
                    phoneNo: '-',
                    email: 'ivy_ong@ivy.com',
                    addressone: '-',
                    addresstwo: '-',
                    city: '-',
                    postal: '-',
                    state: 'Kuala Lumpur',
                    country: 'Malaysia',
                    nationality: 'Malaysia',
                    identification: 'IC No.',
                    identificationNo: '880808016998'
                }
            ];
        };

        $scope.resetJSON();


    });

});
