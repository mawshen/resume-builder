define(['appModule'], function(app) {
    app.directive('eduForm', function() {

        return {
            restrict: 'A',
            /**
             * @description:
             * Scope linked the functions/attributes between controller and this directive.
             */
            scope: {
                userEduNew: "=myAttribute",
                userEdu: "=myEduattribute",
                control: "=myControl",
                addEdu: "&myAddedu",
                toggleEduEditForm: "&myToggleeditform",
                toggleEduAddForm: "&myToggleform",
                toggleEditBtn: "&myToggleebtn"
            },
            /**
             * @description:
             * Link the html document that will be control by this directive.
             */
            templateUrl: '/NewResume/App/Views/resume/eduForm.html',
            link: function(scope) {
                /**
                 * @description:
                 * scope.eduFControl linked with the scope.controlDirFunction in previewController to let it access the functions within this directive.
                 */
                scope.eduFControl = scope.control || {};

                scope.eduFControl.cancelEduEdit = function() {
                    scope.cancelEduEdit();
                };

                scope.delIndex = 0;
                scope.delSwitch = false;
                scope.position = 0;
                scope.isEdit = false;

                scope.initiateSelectForm = function(){
                    $("#eduSelectM").select2();
                    $("#eduSelectEL").select2();
                    $("#eduSelectFS").select2();
                    $("#eduSelectG").select2();
                    $("#eduSelectUL").select2();
                };
                 
                 scope.initiateSelectForm();

                /**
                 * @description:
                 * Delete function will be available only during edit mode.
                 */
                scope.eduFControl.controlEduDelete = function() {
                    scope.delSwitch = true;
                };
                /**
                 * @description:
                 * Function to delete an Education.
                 */
                scope.deleteEdu = function() {
                    scope.userEdu.splice(scope.delIndex, 1);
                    scope.cancelEduEdit();
                    scope.resetBtn();
                };
                /**
                 * @description:
                 * This function let the previewController to pass the education that need to be edit. All the data will loop into the edit form through the passing method.
                 */
                scope.eduFControl.getUserEdu = function(pos, uName, uQualification, uStudyField) {
                    scope.position = pos;
                    scope.isEdit = true;

                    for (var counter = 0; counter < scope.userEdu.length; counter++) {
                        if (scope.userEdu[counter].university === uName && scope.userEdu[counter].qualification === uQualification && scope.userEdu[counter].fieldofstudy === uStudyField) {
                            scope.delIndex = counter;
                            scope.universityc = scope.userEdu[counter].university;
                            $("#userEduEditor #eduSelectM").select2().select2("val", scope.userEdu[counter].gradMonth);
                            scope.gradMonthc = scope.userEdu[counter].gradMonth;
                            scope.gradYearc = scope.userEdu[counter].gradYear;
                            $("#userEduEditor #eduSelectEL").select2().select2("val", scope.userEdu[counter].qualification);
                            scope.qualificationc = scope.userEdu[counter].qualification;
                            scope.fieldofstudyc = scope.userEdu[counter].fieldofstudy;
                            scope.majorc = scope.userEdu[counter].major;
                            $("#userEduEditor #eduSelectFS").select2().select2("val", scope.userEdu[counter].fieldofstudy);
                            $("#userEduEditor #eduSelectG").select2().select2("val", scope.userEdu[counter].grade);
                            $("#userEduEditor #eduSelectUL").select2().select2("val", scope.userEdu[counter].universitylocation);
                            scope.gradec = scope.userEdu[counter].grade;
                            scope.universitylocationc = scope.userEdu[counter].universitylocation;
                            scope.addinformationc = scope.userEdu[counter].addinformation;
                        }
                    }

                    scope.toggleEduEditForm();
                };
                /**
                 * @description:
                 * Cancel the edit/add form. All data field will be reset.
                 */
                scope.cancelEduEdit = function() {
                    scope.universityc = '';
                    $("#inputUniversity").val("");
                    $("#eduSelectM").select2().select2("val", "");
                    scope.gradMonthc = '';
                    scope.gradYearc = '';
                    $("#inputYear").val("");
                    $("#eduSelectEL").select2().select2("val", "");
                    scope.qualificationc = '';
                    scope.fieldofstudyc = '';
                    scope.majorc = '';
                    $("#inputMajor").val("");
                    $("#eduSelectFS").select2().select2("val", "");
                    $("#eduSelectG").select2().select2("val", "");
                    $("#eduSelectUL").select2().select2("val", "");
                    scope.gradec = '';
                    scope.universitylocationc = '';
                    scope.addinformationc = "";
                    $("#textareaAI").val("");
                    scope.delSwitch = false;
                    scope.isEdit = false;
                };
                /**
                 * @description:
                 * Reset all the form/btn's state to make them show/hide.
                 */
                scope.resetBtn = function() {
                    scope.toggleEditBtn();
                    scope.toggleEduEditForm();
                    scope.toggleEduAddForm();
                };
                /**
                 * @description:
                 * Function used to add newly created education.
                 */
                scope.addNewEducation = function() {
//                var setUID = 0;
//
//                for (var checker = 0; checker < scope.userEdu.length; checker++) {
//                    if (scope.userEdu[checker] === null) {
//                        alert(checker);
//                    } else {
//                        setUID = checker;
//                    }
//                }

                    scope.userEduNew.university = scope.universityc;
                    scope.userEduNew.gradMonth = scope.gradMonthc;
                    scope.userEduNew.gradYear = scope.gradYearc;
                    scope.userEduNew.qualification = scope.qualificationc;
                    scope.userEduNew.fieldofstudy = scope.fieldofstudyc;
                    scope.userEduNew.major = scope.majorc;
                    scope.userEduNew.grade = scope.gradec;
                    scope.userEduNew.universitylocation = scope.universitylocationc;
                    scope.userEduNew.addinformation = scope.addinformationc;

//                for (var achecker = 0; achecker < scope.userEdu.length; achecker++) {
//                    if (scope.userEdu[achecker].university === scope.userEduNew.university && scope.userEdu[achecker].qualification === scope.userEduNew.qualification && scope.userEdu[achecker].major === scope.userEduNew.major) {
//                        scope.userEdu.splice(achecker, 1);
//                    }
//                }

                    scope.addEdu();
                    scope.cancelEduEdit();
                    scope.resetBtn();
                };

                scope.changeEdu = function() {
                    scope.userEdu[scope.position].university = scope.universityc;
                    scope.userEdu[scope.position].gradMonth = scope.gradMonthc;
                    scope.userEdu[scope.position].gradYear = scope.gradYearc;
                    scope.userEdu[scope.position].qualification = scope.qualificationc;
                    scope.userEdu[scope.position].fieldofstudy = scope.fieldofstudyc;
                    scope.userEdu[scope.position].major = scope.majorc;
                    scope.userEdu[scope.position].grade = scope.gradec;
                    scope.userEdu[scope.position].universitylocation = scope.universitylocationc;
                    scope.userEdu[scope.position].addinformation = scope.addinformationc;

                    scope.cancelEduEdit();
                    scope.resetBtn();
                };

                /**
                 * @description:
                 * All the select2 bind data options.**Can be change/delete.**
                 */
                scope.month = [
                    {
                        id: 1,
                        text: 'Jan'},
                    {
                        id: 2,
                        text: 'Feb'},
                    {
                        id: 3,
                        text: 'Mar'},
                    {
                        id: 4,
                        text: 'Apr'},
                    {
                        id: 5,
                        text: 'May'},
                    {
                        id: 6,
                        text: 'Jun'},
                    {
                        id: 7,
                        text: 'Jul'},
                    {
                        id: 8,
                        text: 'Aug'},
                    {
                        id: 9,
                        text: 'Sept'},
                    {
                        id: 10,
                        text: 'Oct'},
                    {
                        id: 11,
                        text: 'Nov'},
                    {
                        id: 12,
                        text: 'Dec'}
                ];

                scope.dtEduLevel = [
                    {
                        id: '1',
                        text: 'Primary/Secondary School/SPM/"O" Level'
                    },
                    {
                        id: '2',
                        text: 'Higher Secondary/STPM/"A" Level/Pre-U'
                    },
                    {
                        id: '3',
                        text: 'Professional Certificate'
                    },
                    {
                        id: '4',
                        text: 'Diploma/Advanced/Higher/Graduate Diploma'
                    },
                    {
                        id: '5',
                        text: "Bachelor's Degree"
                    },
                    {
                        id: '6',
                        text: 'Post Graduate Diploma'
                    },
                    {
                        id: '7',
                        text: 'Professional Degree'
                    },
                    {
                        id: '8',
                        text: "Master's Degree"
                    },
                    {
                        id: '9',
                        text: 'Doctorate (PhD)'
                    }
                ];

                scope.dtFieldStudy = [
                    {
                        text: 'Engineering',
                        children: [
                            {
                                id: 1,
                                text: 'Engineering (Aviation/Aeronautics/Astronautics)'
                            },
                            {
                                id: 2,
                                text: 'Engineering (Bioengineering/Biomedical)'
                            },
                            {
                                id: 3,
                                text: 'Engineering (Chemical)'
                            },
                            {
                                id: 4,
                                text: 'Engineering (Civil)'
                            },
                            {
                                id: 5,
                                text: 'Engineering (Computer/Telecommunication)'
                            },
                            {
                                id: 6,
                                text: 'Engineering (Environment/Health/Safety)'
                            },
                            {
                                id: 7,
                                text: 'Engineering (Industrial)'
                            },
                            {
                                id: 8,
                                text: 'Engineering (Marine)'
                            },
                            {
                                id: 9,
                                text: 'Engineering (Material Science)'
                            },
                            {
                                id: 10,
                                text: 'Engineering (Mechanical)'
                            },
                            {
                                id: 11,
                                text: 'Engineering (Mechatronic/Electromechanical)'
                            },
                            {
                                id: 12,
                                text: 'Engineering (Metal Fabrication/Tool & Die/Welding)'
                            },
                            {
                                id: 13,
                                text: 'Engineering (Mining/Mineral)'
                            },
                            {
                                id: 14,
                                text: 'Engineering (Others)'
                            },
                            {
                                id: 15,
                                text: 'Engineering (Petroleum/Oil/Gas)'
                            }
                        ]
                    },
                    {
                        text: 'Sciences',
                        children: [
                            {
                                id: 16,
                                text: 'Agriculture/Aquaculture/Forestry'
                            },
                            {
                                id: 17,
                                text: 'Biology'
                            },
                            {
                                id: 18,
                                text: 'Bio Technology'
                            },
                            {
                                id: 19,
                                text: 'Chemistry'
                            },
                            {
                                id: 20,
                                text: 'Computer Science/Information Technology'
                            },
                            {
                                id: 21,
                                text: 'Food Technology/Nutrition/Dietetics'
                            },
                            {
                                id: 22,
                                text: 'Geographical Science'
                            },
                            {
                                id: 23,
                                text: 'Geology/Geophysics'
                            },
                            {
                                id: 24,
                                text: 'History'
                            },
                            {
                                id: 25,
                                text: 'Mathematics'
                            },
                            {
                                id: 26,
                                text: 'Optometry'
                            },
                            {
                                id: 27,
                                text: 'Philosophy'
                            },
                            {
                                id: 28,
                                text: 'Political Science'
                            },
                            {
                                id: 29,
                                text: 'Quantity Survey'
                            },
                            {
                                id: 30,
                                text: 'Science & Technology'
                            },
                            {
                                id: 31,
                                text: 'Social Science/Sociology'
                            },
                            {
                                id: 32,
                                text: 'Sports Science & Management'
                            }
                        ]
                    },
                    {
                        text: 'Business',
                        children: [
                            {
                                id: 33,
                                text: 'Business Studies/Administration/Management'
                            },
                            {
                                id: 34,
                                text: 'Commerce'
                            },
                            {
                                id: 35,
                                text: 'Economics'
                            },
                            {
                                id: 36,
                                text: 'Finance/Accountancy/Banking'
                            },
                            {
                                id: 37,
                                text: 'Human Resource Management'
                            },
                            {
                                id: 38,
                                text: 'Marketing'
                            },
                            {
                                id: 39,
                                text: 'Secretarial'
                            }
                        ]
                    },
                    {
                        text: 'Services',
                        children: [
                            {
                                id: 40,
                                text: 'Airline Operation/Airport Management'
                            },
                            {
                                id: 41,
                                text: 'Food & Beverage Services Management'
                            },
                            {
                                id: 42,
                                text: 'Journalism'
                            },
                            {
                                id: 43,
                                text: 'Library Management'
                            },
                            {
                                id: 44,
                                text: 'Logistic/Transportation'
                            },
                            {
                                id: 45,
                                text: 'Maritime Studies'
                            },
                            {
                                id: 46,
                                text: 'Personal Services'
                            },
                            {
                                id: 47,
                                text: 'Property Development/Real Estate Management'
                            },
                            {
                                id: 48,
                                text: 'Protective Service & Management'
                            }
                        ]
                    },
                    {
                        text: 'Media / Art',
                        children: [
                            {
                                id: 49,
                                text: 'Advertising/Media'
                            },
                            {
                                id: 50,
                                text: 'Art/Design/Creative Multimedia'
                            },
                            {
                                id: 51,
                                text: 'Humanities/Liberal Arts'
                            },
                            {
                                id: 52,
                                text: 'Linguistics/Languages'
                            },
                            {
                                id: 53,
                                text: 'Mass Communications'
                            },
                            {
                                id: 54,
                                text: 'Music/Performing Arts Studies'
                            },
                            {
                                id: 55,
                                text: 'Textile/Fashion Design'
                            }
                        ]
                    },
                    {
                        text: 'Medicine',
                        children: [
                            {
                                id: 56,
                                text: 'Dentistry'
                            },
                            {
                                id: 57,
                                text: 'Medical Science'
                            },
                            {
                                id: 58,
                                text: 'Medicine'
                            },
                            {
                                id: 59,
                                text: 'Nursing'
                            },
                            {
                                id: 60,
                                text: 'Pharmacy/Pharmacology'
                            }, {
                                id: 16,
                                text: 'Physical Therapy/Physiotherapy'
                            }, {
                                id: 62,
                                text: 'Psychology'
                            },
                            {
                                id: 63,
                                text: 'Veterinary'
                            }
                        ]
                    },
                    {
                        text: 'Others',
                        children: [
                            {
                                id: 64,
                                text: 'Architecture'
                            },
                            {
                                id: 65,
                                text: 'Education/Teaching/Training'
                            },
                            {
                                id: 66,
                                text: 'Hospitality/Tourism/Hotel Management'
                            },
                            {
                                id: 67,
                                text: 'Law'
                            },
                            {
                                id: 68,
                                text: 'Others'
                            },
                            {
                                id: 69,
                                text: 'Urban Studies/Town Planning'
                            }
                        ]
                    },
                    {
                        text: 'Any Field'
                    }
                ];

                scope.dtGrade = [
                    {
                        id: 1,
                        text: 'Grade A'
                    },
                    {
                        id: 2,
                        text: 'Grade B'
                    },
                    {
                        id: 3,
                        text: 'Grade C'
                    },
                    {
                        id: 4,
                        text: 'Grade D'
                    },
                    {
                        id: 5,
                        text: '1st Class'
                    },
                    {
                        id: 6,
                        text: '2nd Class Upper'
                    },
                    {
                        id: 7,
                        text: '2nd Class Lower'
                    },
                    {
                        id: 8,
                        text: '3rd Class'
                    },
                    {
                        id: 9,
                        text: 'Pass/Non-gradable'
                    },
                    {
                        id: 10,
                        text: 'Incomplete'
                    },
                    {
                        id: 11,
                        text: 'Fail'
                    },
                    {
                        id: 12,
                        text: 'On-going'
                    },
                    {
                        id: 13,
                        text: 'CGPA/Percentage'
                    }
                ];

                scope.dtULocation = [{"name": "Afghanistan", "region": "Asia"}, {"name": "Aland Islands", "region": "Europe"}, {"name": "Albania", "region": "Europe"}, {"name": "Algeria", "region": "Africa"}, {"name": "American Samoa", "region": "Oceania"}, {"name": "Andorra", "region": "Europe"}, {"name": "Angola", "region": "Africa"}, {"name": "Anguilla", "region": "Americas"}, {"name": "Antarctica", "region": ""}, {"name": "Antigua and Barbuda", "region": "Americas"}, {"name": "Argentina", "region": "Americas"}, {"name": "Armenia", "region": "Asia"}, {"name": "Aruba", "region": "Americas"}, {"name": "Australia", "region": "Oceania"}, {"name": "Austria", "region": "Europe"}, {"name": "Azerbaijan", "region": "Asia"}, {"name": "Bahamas", "region": "Americas"}, {"name": "Bahrain", "region": "Asia"}, {"name": "Bangladesh", "region": "Asia"}, {"name": "Barbados", "region": "Americas"}, {"name": "Belarus", "region": "Europe"}, {"name": "Belgium", "region": "Europe"}, {"name": "Belize", "region": "Americas"}, {"name": "Benin", "region": "Africa"}, {"name": "Bermuda", "region": "Americas"}, {"name": "Bhutan", "region": "Asia"}, {"name": "Bolivia", "region": "Americas"}, {"name": "Bonaire", "region": "Americas"}, {"name": "Bosnia and Herzegovina", "region": "Europe"}, {"name": "Botswana", "region": "Africa"}, {"name": "Bouvet Island", "region": ""}, {"name": "Brazil", "region": "Americas"}, {"name": "British Indian Ocean Territory", "region": "Africa"}, {"name": "British Virgin Islands", "region": "Americas"}, {"name": "Brunei", "region": "Asia"}, {"name": "Bulgaria", "region": "Europe"}, {"name": "Burkina Faso", "region": "Africa"}, {"name": "Burundi", "region": "Africa"}, {"name": "Cambodia", "region": "Asia"}, {"name": "Cameroon", "region": "Africa"}, {"name": "Canada", "region": "Americas"}, {"name": "Cape Verde", "region": "Africa"}, {"name": "Cayman Islands", "region": "Americas"}, {"name": "Central African Republic", "region": "Africa"}, {"name": "Chad", "region": "Africa"}, {"name": "Chile", "region": "Americas"}, {"name": "China", "region": "Asia"}, {"name": "Christmas Island", "region": "Oceania"}, {"name": "Cocos (Keeling) Islands", "region": "Oceania"}, {"name": "Colombia", "region": "Americas"}, {"name": "Comoros", "region": "Africa"}, {"name": "Republic of the Congo", "region": "Africa"}, {"name": "Democratic Republic of the Congo", "region": "Africa"}, {"name": "Cook Islands", "region": "Oceania"}, {"name": "Costa Rica", "region": "Americas"}, {"name": "Côte d'Ivoire", "region": "Africa"}, {"name": "Croatia", "region": "Europe"}, {"name": "Cuba", "region": "Americas"}, {"name": "Curaçao", "region": "Americas"}, {"name": "Cyprus", "region": "Asia"}, {"name": "Czech Republic", "region": "Europe"}, {"name": "Denmark", "region": "Europe"}, {"name": "Djibouti", "region": "Africa"}, {"name": "Dominica", "region": "Americas"}, {"name": "Dominican Republic", "region": "Americas"}, {"name": "Ecuador", "region": "Americas"}, {"name": "Egypt", "region": "Africa"}, {"name": "El Salvador", "region": "Americas"}, {"name": "Equatorial Guinea", "region": "Africa"}, {"name": "Eritrea", "region": "Africa"}, {"name": "Estonia", "region": "Europe"}, {"name": "Ethiopia", "region": "Africa"}, {"name": "Falkland Islands", "region": "Americas"}, {"name": "Faroe Islands", "region": "Europe"}, {"name": "Fiji", "region": "Oceania"}, {"name": "Finland", "region": "Europe"}, {"name": "France", "region": "Europe"}, {"name": "French Guiana", "region": "Americas"}, {"name": "French Polynesia", "region": "Oceania"}, {"name": "French Southern and Antarctic Lands", "region": ""}, {"name": "Gabon", "region": "Africa"}, {"name": "Gambia", "region": "Africa"}, {"name": "Georgia", "region": "Asia"}, {"name": "Germany", "region": "Europe"}, {"name": "Ghana", "region": "Africa"}, {"name": "Gibraltar", "region": "Europe"}, {"name": "Greece", "region": "Europe"}, {"name": "Greenland", "region": "Americas"}, {"name": "Grenada", "region": "Americas"}, {"name": "Guadeloupe", "region": "Americas"}, {"name": "Guam", "region": "Oceania"}, {"name": "Guatemala", "region": "Americas"}, {"name": "Guernsey", "region": "Europe"}, {"name": "Guinea", "region": "Africa"}, {"name": "Guinea-Bissau", "region": "Africa"}, {"name": "Guyana", "region": "Americas"}, {"name": "Haiti", "region": "Americas"}, {"name": "Heard Island and McDonald Islands", "region": ""}, {"name": "Vatican City", "region": "Europe"}, {"name": "Honduras", "region": "Americas"}, {"name": "Hong Kong", "region": "Asia"}, {"name": "Hungary", "region": "Europe"}, {"name": "Iceland", "region": "Europe"}, {"name": "India", "region": "Asia"}, {"name": "Indonesia", "region": "Asia"}, {"name": "Iran", "region": "Asia"}, {"name": "Iraq", "region": "Asia"}, {"name": "Ireland", "region": "Europe"}, {"name": "Isle of Man", "region": "Europe"}, {"name": "Israel", "region": "Asia"}, {"name": "Italy", "region": "Europe"}, {"name": "Jamaica", "region": "Americas"}, {"name": "Japan", "region": "Asia"}, {"name": "Jersey", "region": "Europe"}, {"name": "Jordan", "region": "Asia"}, {"name": "Kazakhstan", "region": "Asia"}, {"name": "Kenya", "region": "Africa"}, {"name": "Kiribati", "region": "Oceania"}, {"name": "Kuwait", "region": "Asia"}, {"name": "Kyrgyzstan", "region": "Asia"}, {"name": "Laos", "region": "Asia"}, {"name": "Latvia", "region": "Europe"}, {"name": "Lebanon", "region": "Asia"}, {"name": "Lesotho", "region": "Africa"}, {"name": "Liberia", "region": "Africa"}, {"name": "Libya", "region": "Africa"}, {"name": "Liechtenstein", "region": "Europe"}, {"name": "Lithuania", "region": "Europe"}, {"name": "Luxembourg", "region": "Europe"}, {"name": "Macau", "region": "Asia"}, {"name": "Macedonia", "region": "Europe"}, {"name": "Madagascar", "region": "Africa"}, {"name": "Malawi", "region": "Africa"}, {"name": "Malaysia", "region": "Asia"}, {"name": "Maldives", "region": "Asia"}, {"name": "Mali", "region": "Africa"}, {"name": "Malta", "region": "Europe"}, {"name": "Marshall Islands", "region": "Oceania"}, {"name": "Martinique", "region": "Americas"}, {"name": "Mauritania", "region": "Africa"}, {"name": "Mauritius", "region": "Africa"}, {"name": "Mayotte", "region": "Africa"}, {"name": "Mexico", "region": "Americas"}, {"name": "Micronesia", "region": "Oceania"}, {"name": "Moldova", "region": "Europe"}, {"name": "Monaco", "region": "Europe"}, {"name": "Mongolia", "region": "Asia"}, {"name": "Montenegro", "region": "Europe"}, {"name": "Montserrat", "region": "Americas"}, {"name": "Morocco", "region": "Africa"}, {"name": "Mozambique", "region": "Africa"}, {"name": "Myanmar", "region": "Asia"}, {"name": "Namibia", "region": "Africa"}, {"name": "Nauru", "region": "Oceania"}, {"name": "Nepal", "region": "Asia"}, {"name": "Netherlands", "region": "Europe"}, {"name": "New Caledonia", "region": "Oceania"}, {"name": "New Zealand", "region": "Oceania"}, {"name": "Nicaragua", "region": "Americas"}, {"name": "Niger", "region": "Africa"}, {"name": "Nigeria", "region": "Africa"}, {"name": "Niue", "region": "Oceania"}, {"name": "Norfolk Island", "region": "Oceania"}, {"name": "North Korea", "region": "Asia"}, {"name": "Northern Mariana Islands", "region": "Oceania"}, {"name": "Norway", "region": "Europe"}, {"name": "Oman", "region": "Asia"}, {"name": "Pakistan", "region": "Asia"}, {"name": "Palau", "region": "Oceania"}, {"name": "Palestine", "region": "Asia"}, {"name": "Panama", "region": "Americas"}, {"name": "Papua New Guinea", "region": "Oceania"}, {"name": "Paraguay", "region": "Americas"}, {"name": "Peru", "region": "Americas"}, {"name": "Philippines", "region": "Asia"}, {"name": "Pitcairn Islands", "region": "Oceania"}, {"name": "Poland", "region": "Europe"}, {"name": "Portugal", "region": "Europe"}, {"name": "Puerto Rico", "region": "Americas"}, {"name": "Qatar", "region": "Asia"}, {"name": "Republic of Kosovo", "region": "Europe"}, {"name": "Réunion", "region": "Africa"}, {"name": "Romania", "region": "Europe"}, {"name": "Russia", "region": "Europe"}, {"name": "Rwanda", "region": "Africa"}, {"name": "Saint Barthélemy", "region": "Americas"}, {"name": "Saint Helena", "region": "Africa"}, {"name": "Saint Kitts and Nevis", "region": "Americas"}, {"name": "Saint Lucia", "region": "Americas"}, {"name": "Saint Martin", "region": "Americas"}, {"name": "Saint Pierre and Miquelon", "region": "Americas"}, {"name": "Saint Vincent and the Grenadines", "region": "Americas"}, {"name": "Samoa", "region": "Oceania"}, {"name": "San Marino", "region": "Europe"}, {"name": "São Tomé and Príncipe", "region": "Africa"}, {"name": "Saudi Arabia", "region": "Asia"}, {"name": "Senegal", "region": "Africa"}, {"name": "Serbia", "region": "Europe"}, {"name": "Seychelles", "region": "Africa"}, {"name": "Sierra Leone", "region": "Africa"}, {"name": "Singapore", "region": "Asia"}, {"name": "Sint Maarten", "region": "Americas"}, {"name": "Slovakia", "region": "Europe"}, {"name": "Slovenia", "region": "Europe"}, {"name": "Solomon Islands", "region": "Oceania"}, {"name": "Somalia", "region": "Africa"}, {"name": "South Africa", "region": "Africa"}, {"name": "South Georgia", "region": "Americas"}, {"name": "South Korea", "region": "Asia"}, {"name": "South Sudan", "region": "Africa"}, {"name": "Spain", "region": "Europe"}, {"name": "Sri Lanka", "region": "Asia"}, {"name": "Sudan", "region": "Africa"}, {"name": "Suriname", "region": "Americas"}, {"name": "Svalbard and Jan Mayen", "region": "Europe"}, {"name": "Swaziland", "region": "Africa"}, {"name": "Sweden", "region": "Europe"}, {"name": "Switzerland", "region": "Europe"}, {"name": "Syria", "region": "Asia"}, {"name": "Taiwan", "region": "Asia"}, {"name": "Tajikistan", "region": "Asia"}, {"name": "Tanzania", "region": "Africa"}, {"name": "Thailand", "region": "Asia"}, {"name": "Timor-Leste", "region": "Asia"}, {"name": "Togo", "region": "Africa"}, {"name": "Tokelau", "region": "Oceania"}, {"name": "Tonga", "region": "Oceania"}, {"name": "Trinidad and Tobago", "region": "Americas"}, {"name": "Tunisia", "region": "Africa"}, {"name": "Turkey", "region": "Asia"}, {"name": "Turkmenistan", "region": "Asia"}, {"name": "Turks and Caicos Islands", "region": "Americas"}, {"name": "Tuvalu", "region": "Oceania"}, {"name": "Uganda", "region": "Africa"}, {"name": "Ukraine", "region": "Europe"}, {"name": "United Arab Emirates", "region": "Asia"}, {"name": "United Kingdom", "region": "Europe"}, {"name": "United States", "region": "Americas"}, {"name": "United States Minor Outlying Islands", "region": "Americas"}, {"name": "United States Virgin Islands", "region": "Americas"}, {"name": "Uruguay", "region": "Americas"}, {"name": "Uzbekistan", "region": "Asia"}, {"name": "Vanuatu", "region": "Oceania"}, {"name": "Venezuela", "region": "Americas"}, {"name": "Vietnam", "region": "Asia"}, {"name": "Wallis and Futuna", "region": "Oceania"}, {"name": "Western Sahara", "region": "Africa"}, {"name": "Yemen", "region": "Asia"}, {"name": "Zambia", "region": "Africa"}, {"name": "Zimbabwe", "region": "Africa"}];

            }
        };
    });

});