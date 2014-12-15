define(['appModule'], function(app) {
    app.directive('aboutmeForm', function() {

        return {
            restrict: 'A',
            scope: {
                userNewAboutme: "=myNewattribute",
                userAboutMe: "=myAboutmeattribute",
                control: "=myControl",
                toggleAboutmeInfo: "&myToggleinfo",
                addAboutme: "&myAdd",
                toggleAboutmeForm: "&myToggleform",
                toggleEditBtn: "&myTogglebtn"

            },
            /**
             * @description:
             * Link the html document that will be control by this directive.
             */
            templateUrl: '/NewResume/App/Views/resume/aboutmeForm.html',
            link: function(scope) {
                angular.element(document).ready(function() {
                    $("input:checkbox").click(function() {
                        if ($(this).is(":checked")) {
                            var group = "input:checkbox[name='" + $(this).attr("name") + "']";
                            $(group).prop("checked", false);
                            $(this).prop("checked", true);
                        } else {
                            $(this).prop("checked", false);
                        }
                    });
                });
                
                scope.aboutmeFControl = scope.control || {};

                scope.aboutmeFControl.cancelAboutme = function() {
                    scope.cancelAboutmeEdit();
                };
                /**
                 * @description:
                 * Function used to save latest modified Additinal Information.
                 */
                scope.saveNewAboutme = function() {
                    scope.userNewAboutme.firstname = scope.firstNamec;
                    scope.userNewAboutme.lastname = scope.lastNamec;
                    scope.userNewAboutme.dobDay = scope.dobDayc;
                    scope.userNewAboutme.dobMonth = scope.dobMonthc;
                    scope.userNewAboutme.dobYear = scope.dobYearc;

                    if (document.getElementById("checkBoxMale").checked === true) {
                        scope.userNewAboutme.gender = "Male";
                    } else if (document.getElementById("checkBoxFemale").checked === true) {
                        scope.userNewAboutme.gender = "Female";
                    }

                    scope.userNewAboutme.mobileCode = scope.mobileCountryCodec;
                    scope.userNewAboutme.mobile = scope.mobileNoc;
                    scope.userNewAboutme.phoneCode = scope.phoneCountryCodec;

                    scope.userNewAboutme.phoneArea = scope.phoneAreaCodec;
                    scope.userNewAboutme.phoneNo = scope.phonec;

                    scope.userNewAboutme.email = scope.firstNamec;
                    scope.userNewAboutme.addressone = scope.addrLineOnec;
                    scope.userNewAboutme.addresstwo = scope.addrLineTwo;
                    scope.userNewAboutme.city = scope.cityc;
                    scope.userNewAboutme.postal = scope.postalCodec;
                    scope.userNewAboutme.state = scope.addrStatec;
                    scope.userNewAboutme.country = scope.countryNamec;

                    scope.userNewAboutme.nationality = scope.nationalityc;
                    scope.userNewAboutme.identification = scope.idc;
                    scope.userNewAboutme.identificationNo = scope.idNoc;

                    scope.addAboutme();
                    scope.cancelAboutmeEdit();
                };
                /**
                 * @description:
                 * This function let the previewController to pass the education that need to be edit. All the data will loop into the edit form through the passing method.
                 */
                scope.aboutmeFControl.getUserAboutme = function() {
                    scope.firstNamec = scope.userAboutMe[0].firstname;
                    $("#aboutFSelectDay").select2("val", scope.userAboutMe[0].dobDay);
                    scope.dobDayc = scope.userAboutMe[0].dobDay;
                    $("#aboutFSelectMonth").select2("val", scope.userAboutMe[0].dobMonth);
                    scope.dobMonthc = scope.userAboutMe[0].dobMonth;
                    scope.dobYearc = scope.userAboutMe[0].dobYear;
                    $("#aboutFSelectCountrycode").select2("val", scope.userAboutMe[0].mobileCode);
                    scope.mobileCountryCodec = scope.userAboutMe[0].mobileCode;
                    scope.mobileNoc = scope.userAboutMe[0].mobile;
                    scope.emailc = scope.userAboutMe[0].email;

                    scope.lastNamec = scope.userAboutMe[0].lastname;
                    if (scope.userAboutMe[0].gender === "Male") {
                        $("#checkBoxMale").prop("checked", true);
                    } else if (scope.userAboutMe[0].gender === "Female") {
                        $("#checkBoxFemale").prop("checked", true);
                    }

                    $("#aboutFSelectPCountrycode").select2("val", scope.userAboutMe[0].phoneCode);
                    scope.phoneCountryCodec = scope.userAboutMe[0].phoneCode;
                    scope.phoneAreaCodec = scope.userAboutMe[0].phoneArea;
                    scope.phonec = scope.userAboutMe[0].phoneNo;

                    scope.addrLineOnec = scope.userAboutMe[0].addressone;
                    scope.cityc = scope.userAboutMe[0].city;
                    $("#aboutFSelectCountryName").select2("val", scope.userAboutMe[0].country);
                    scope.countryNamec = scope.userAboutMe[0].country;
                    scope.addrLineTwo = scope.userAboutMe[0].addresstwo;
                    scope.postalCodec = scope.userAboutMe[0].postal;
                    scope.addrStatec = scope.userAboutMe[0].state;

                    $("#aboutFSelectNationality").select2("val", scope.userAboutMe[0].nationality);
                    scope.nationalityc = scope.userAboutMe[0].nationality;
                    $("#aboutFSelectIdentification").select2("val", scope.userAboutMe[0].identification);
                    scope.idc = scope.userAboutMe[0].identification;
                    scope.idNoc = scope.userAboutMe[0].identificationNo;

                    scope.toggleAboutmeForm();
                    scope.toggleEditBtn();
                    //scope.toggleAddInfo();
                };
                /**
                 * @description:
                 * Cancel the edit/add form. All data field will be reset.
                 */
                scope.cancelAboutmeEdit = function() {
                    scope.firstNamec = '';
                    $("#aboutFSelectDay").select2("val", "");
                    scope.dobDayc = '';
                    $("#aboutFSelectMonth").select2("val", "");
                    scope.dobYearc = '';
                    $("#aboutFSelectCountrycode").select2("val", "");
                    scope.mobileCountryCodec = '';
                    scope.mobileNoc = '';
                    scope.emailc = '';

                    scope.lastNamec = '';
                    $("#checkBoxMale").prop("checked", false);
                    $("#checkBoxFemale").prop("checked", false);
                    $("#aboutFSelectPCountrycode").select2("val", "");
                    scope.phoneCountryCodec = '';
                    scope.phoneAreaCodec = '';
                    scope.phonec = '';
                    scope.firstNamec = '';

                    scope.addrLineOnec = '';
                    scope.cityc = '';
                    $("#aboutFSelectCountryName").select2("val", "");
                    scope.countryNamec = '';
                    scope.addrLineTwo = '';
                    scope.postalCodec = '';
                    scope.addrStatec = '';

                    $("#aboutFSelectNationality").select2("val", "");
                    scope.nationalityc = '';
                    $("#aboutFSelectIdentification").select2("val", "");
                    scope.idc = '';
                    scope.idNoc = '';

                    scope.toggleAboutmeForm();
                    scope.toggleEditBtn();
                    scope.toggleAboutmeInfo();
                    //scope.toggleAddInfo();
                };
                /**
                 * @description:
                 * All the select2 bind data options. **Can be change/delete.**
                 */
                scope.dtDays = [
                    {
                        value: '1',
                        text: '1'},
                    {
                        value: '2',
                        text: '2'},
                    {
                        value: '3',
                        text: '3'},
                    {
                        value: '4',
                        text: "4"},
                    {
                        value: '5',
                        text: '5'},
                    {
                        value: '6',
                        text: '6'},
                    {
                        value: '7',
                        text: '7'},
                    {
                        value: '8',
                        text: '8'},
                    {
                        value: '9',
                        text: '9'},
                    {
                        value: '10',
                        text: '10'},
                    {
                        value: '11',
                        text: '11'},
                    {
                        value: '12',
                        text: '12'},
                    {
                        value: '13',
                        text: "13"},
                    {
                        value: '14',
                        text: '14'},
                    {
                        value: '15',
                        text: '15'},
                    {
                        value: '16',
                        text: '16'},
                    {
                        value: '17',
                        text: '17'},
                    {
                        value: '18',
                        text: '18'},
                    {
                        value: '19',
                        text: '19'},
                    {
                        value: '20',
                        text: '20'},
                    {
                        value: '21',
                        text: '21'},
                    {
                        value: '22',
                        text: "22"},
                    {
                        value: '23',
                        text: '23'},
                    {
                        value: '24',
                        text: '24'},
                    {
                        value: '25',
                        text: '25'},
                    {
                        value: '26',
                        text: '26'},
                    {
                        value: '27',
                        text: '27'},
                    {
                        value: '28',
                        text: '28'},
                    {
                        value: '29',
                        text: '29'},
                    {
                        value: '30',
                        text: '30'},
                    {
                        value: '31',
                        text: '31'
                    }
                ];

                scope.dtMonth = [
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

                scope.dtCountry = [{"name": "Afghanistan", "region": "Asia"}, {"name": "Aland Islands", "region": "Europe"}, {"name": "Albania", "region": "Europe"}, {"name": "Algeria", "region": "Africa"}, {"name": "American Samoa", "region": "Oceania"}, {"name": "Andorra", "region": "Europe"}, {"name": "Angola", "region": "Africa"}, {"name": "Anguilla", "region": "Americas"}, {"name": "Antarctica", "region": ""}, {"name": "Antigua and Barbuda", "region": "Americas"}, {"name": "Argentina", "region": "Americas"}, {"name": "Armenia", "region": "Asia"}, {"name": "Aruba", "region": "Americas"}, {"name": "Australia", "region": "Oceania"}, {"name": "Austria", "region": "Europe"}, {"name": "Azerbaijan", "region": "Asia"}, {"name": "Bahamas", "region": "Americas"}, {"name": "Bahrain", "region": "Asia"}, {"name": "Bangladesh", "region": "Asia"}, {"name": "Barbados", "region": "Americas"}, {"name": "Belarus", "region": "Europe"}, {"name": "Belgium", "region": "Europe"}, {"name": "Belize", "region": "Americas"}, {"name": "Benin", "region": "Africa"}, {"name": "Bermuda", "region": "Americas"}, {"name": "Bhutan", "region": "Asia"}, {"name": "Bolivia", "region": "Americas"}, {"name": "Bonaire", "region": "Americas"}, {"name": "Bosnia and Herzegovina", "region": "Europe"}, {"name": "Botswana", "region": "Africa"}, {"name": "Bouvet Island", "region": ""}, {"name": "Brazil", "region": "Americas"}, {"name": "British Indian Ocean Territory", "region": "Africa"}, {"name": "British Virgin Islands", "region": "Americas"}, {"name": "Brunei", "region": "Asia"}, {"name": "Bulgaria", "region": "Europe"}, {"name": "Burkina Faso", "region": "Africa"}, {"name": "Burundi", "region": "Africa"}, {"name": "Cambodia", "region": "Asia"}, {"name": "Cameroon", "region": "Africa"}, {"name": "Canada", "region": "Americas"}, {"name": "Cape Verde", "region": "Africa"}, {"name": "Cayman Islands", "region": "Americas"}, {"name": "Central African Republic", "region": "Africa"}, {"name": "Chad", "region": "Africa"}, {"name": "Chile", "region": "Americas"}, {"name": "China", "region": "Asia"}, {"name": "Christmas Island", "region": "Oceania"}, {"name": "Cocos (Keeling) Islands", "region": "Oceania"}, {"name": "Colombia", "region": "Americas"}, {"name": "Comoros", "region": "Africa"}, {"name": "Republic of the Congo", "region": "Africa"}, {"name": "Democratic Republic of the Congo", "region": "Africa"}, {"name": "Cook Islands", "region": "Oceania"}, {"name": "Costa Rica", "region": "Americas"}, {"name": "Côte d'Ivoire", "region": "Africa"}, {"name": "Croatia", "region": "Europe"}, {"name": "Cuba", "region": "Americas"}, {"name": "Curaçao", "region": "Americas"}, {"name": "Cyprus", "region": "Asia"}, {"name": "Czech Republic", "region": "Europe"}, {"name": "Denmark", "region": "Europe"}, {"name": "Djibouti", "region": "Africa"}, {"name": "Dominica", "region": "Americas"}, {"name": "Dominican Republic", "region": "Americas"}, {"name": "Ecuador", "region": "Americas"}, {"name": "Egypt", "region": "Africa"}, {"name": "El Salvador", "region": "Americas"}, {"name": "Equatorial Guinea", "region": "Africa"}, {"name": "Eritrea", "region": "Africa"}, {"name": "Estonia", "region": "Europe"}, {"name": "Ethiopia", "region": "Africa"}, {"name": "Falkland Islands", "region": "Americas"}, {"name": "Faroe Islands", "region": "Europe"}, {"name": "Fiji", "region": "Oceania"}, {"name": "Finland", "region": "Europe"}, {"name": "France", "region": "Europe"}, {"name": "French Guiana", "region": "Americas"}, {"name": "French Polynesia", "region": "Oceania"}, {"name": "French Southern and Antarctic Lands", "region": ""}, {"name": "Gabon", "region": "Africa"}, {"name": "Gambia", "region": "Africa"}, {"name": "Georgia", "region": "Asia"}, {"name": "Germany", "region": "Europe"}, {"name": "Ghana", "region": "Africa"}, {"name": "Gibraltar", "region": "Europe"}, {"name": "Greece", "region": "Europe"}, {"name": "Greenland", "region": "Americas"}, {"name": "Grenada", "region": "Americas"}, {"name": "Guadeloupe", "region": "Americas"}, {"name": "Guam", "region": "Oceania"}, {"name": "Guatemala", "region": "Americas"}, {"name": "Guernsey", "region": "Europe"}, {"name": "Guinea", "region": "Africa"}, {"name": "Guinea-Bissau", "region": "Africa"}, {"name": "Guyana", "region": "Americas"}, {"name": "Haiti", "region": "Americas"}, {"name": "Heard Island and McDonald Islands", "region": ""}, {"name": "Vatican City", "region": "Europe"}, {"name": "Honduras", "region": "Americas"}, {"name": "Hong Kong", "region": "Asia"}, {"name": "Hungary", "region": "Europe"}, {"name": "Iceland", "region": "Europe"}, {"name": "India", "region": "Asia"}, {"name": "Indonesia", "region": "Asia"}, {"name": "Iran", "region": "Asia"}, {"name": "Iraq", "region": "Asia"}, {"name": "Ireland", "region": "Europe"}, {"name": "Isle of Man", "region": "Europe"}, {"name": "Israel", "region": "Asia"}, {"name": "Italy", "region": "Europe"}, {"name": "Jamaica", "region": "Americas"}, {"name": "Japan", "region": "Asia"}, {"name": "Jersey", "region": "Europe"}, {"name": "Jordan", "region": "Asia"}, {"name": "Kazakhstan", "region": "Asia"}, {"name": "Kenya", "region": "Africa"}, {"name": "Kiribati", "region": "Oceania"}, {"name": "Kuwait", "region": "Asia"}, {"name": "Kyrgyzstan", "region": "Asia"}, {"name": "Laos", "region": "Asia"}, {"name": "Latvia", "region": "Europe"}, {"name": "Lebanon", "region": "Asia"}, {"name": "Lesotho", "region": "Africa"}, {"name": "Liberia", "region": "Africa"}, {"name": "Libya", "region": "Africa"}, {"name": "Liechtenstein", "region": "Europe"}, {"name": "Lithuania", "region": "Europe"}, {"name": "Luxembourg", "region": "Europe"}, {"name": "Macau", "region": "Asia"}, {"name": "Macedonia", "region": "Europe"}, {"name": "Madagascar", "region": "Africa"}, {"name": "Malawi", "region": "Africa"}, {"name": "Malaysia", "region": "Asia"}, {"name": "Maldives", "region": "Asia"}, {"name": "Mali", "region": "Africa"}, {"name": "Malta", "region": "Europe"}, {"name": "Marshall Islands", "region": "Oceania"}, {"name": "Martinique", "region": "Americas"}, {"name": "Mauritania", "region": "Africa"}, {"name": "Mauritius", "region": "Africa"}, {"name": "Mayotte", "region": "Africa"}, {"name": "Mexico", "region": "Americas"}, {"name": "Micronesia", "region": "Oceania"}, {"name": "Moldova", "region": "Europe"}, {"name": "Monaco", "region": "Europe"}, {"name": "Mongolia", "region": "Asia"}, {"name": "Montenegro", "region": "Europe"}, {"name": "Montserrat", "region": "Americas"}, {"name": "Morocco", "region": "Africa"}, {"name": "Mozambique", "region": "Africa"}, {"name": "Myanmar", "region": "Asia"}, {"name": "Namibia", "region": "Africa"}, {"name": "Nauru", "region": "Oceania"}, {"name": "Nepal", "region": "Asia"}, {"name": "Netherlands", "region": "Europe"}, {"name": "New Caledonia", "region": "Oceania"}, {"name": "New Zealand", "region": "Oceania"}, {"name": "Nicaragua", "region": "Americas"}, {"name": "Niger", "region": "Africa"}, {"name": "Nigeria", "region": "Africa"}, {"name": "Niue", "region": "Oceania"}, {"name": "Norfolk Island", "region": "Oceania"}, {"name": "North Korea", "region": "Asia"}, {"name": "Northern Mariana Islands", "region": "Oceania"}, {"name": "Norway", "region": "Europe"}, {"name": "Oman", "region": "Asia"}, {"name": "Pakistan", "region": "Asia"}, {"name": "Palau", "region": "Oceania"}, {"name": "Palestine", "region": "Asia"}, {"name": "Panama", "region": "Americas"}, {"name": "Papua New Guinea", "region": "Oceania"}, {"name": "Paraguay", "region": "Americas"}, {"name": "Peru", "region": "Americas"}, {"name": "Philippines", "region": "Asia"}, {"name": "Pitcairn Islands", "region": "Oceania"}, {"name": "Poland", "region": "Europe"}, {"name": "Portugal", "region": "Europe"}, {"name": "Puerto Rico", "region": "Americas"}, {"name": "Qatar", "region": "Asia"}, {"name": "Republic of Kosovo", "region": "Europe"}, {"name": "Réunion", "region": "Africa"}, {"name": "Romania", "region": "Europe"}, {"name": "Russia", "region": "Europe"}, {"name": "Rwanda", "region": "Africa"}, {"name": "Saint Barthélemy", "region": "Americas"}, {"name": "Saint Helena", "region": "Africa"}, {"name": "Saint Kitts and Nevis", "region": "Americas"}, {"name": "Saint Lucia", "region": "Americas"}, {"name": "Saint Martin", "region": "Americas"}, {"name": "Saint Pierre and Miquelon", "region": "Americas"}, {"name": "Saint Vincent and the Grenadines", "region": "Americas"}, {"name": "Samoa", "region": "Oceania"}, {"name": "San Marino", "region": "Europe"}, {"name": "São Tomé and Príncipe", "region": "Africa"}, {"name": "Saudi Arabia", "region": "Asia"}, {"name": "Senegal", "region": "Africa"}, {"name": "Serbia", "region": "Europe"}, {"name": "Seychelles", "region": "Africa"}, {"name": "Sierra Leone", "region": "Africa"}, {"name": "Singapore", "region": "Asia"}, {"name": "Sint Maarten", "region": "Americas"}, {"name": "Slovakia", "region": "Europe"}, {"name": "Slovenia", "region": "Europe"}, {"name": "Solomon Islands", "region": "Oceania"}, {"name": "Somalia", "region": "Africa"}, {"name": "South Africa", "region": "Africa"}, {"name": "South Georgia", "region": "Americas"}, {"name": "South Korea", "region": "Asia"}, {"name": "South Sudan", "region": "Africa"}, {"name": "Spain", "region": "Europe"}, {"name": "Sri Lanka", "region": "Asia"}, {"name": "Sudan", "region": "Africa"}, {"name": "Suriname", "region": "Americas"}, {"name": "Svalbard and Jan Mayen", "region": "Europe"}, {"name": "Swaziland", "region": "Africa"}, {"name": "Sweden", "region": "Europe"}, {"name": "Switzerland", "region": "Europe"}, {"name": "Syria", "region": "Asia"}, {"name": "Taiwan", "region": "Asia"}, {"name": "Tajikistan", "region": "Asia"}, {"name": "Tanzania", "region": "Africa"}, {"name": "Thailand", "region": "Asia"}, {"name": "Timor-Leste", "region": "Asia"}, {"name": "Togo", "region": "Africa"}, {"name": "Tokelau", "region": "Oceania"}, {"name": "Tonga", "region": "Oceania"}, {"name": "Trinidad and Tobago", "region": "Americas"}, {"name": "Tunisia", "region": "Africa"}, {"name": "Turkey", "region": "Asia"}, {"name": "Turkmenistan", "region": "Asia"}, {"name": "Turks and Caicos Islands", "region": "Americas"}, {"name": "Tuvalu", "region": "Oceania"}, {"name": "Uganda", "region": "Africa"}, {"name": "Ukraine", "region": "Europe"}, {"name": "United Arab Emirates", "region": "Asia"}, {"name": "United Kingdom", "region": "Europe"}, {"name": "United States", "region": "Americas"}, {"name": "United States Minor Outlying Islands", "region": "Americas"}, {"name": "United States Virgin Islands", "region": "Americas"}, {"name": "Uruguay", "region": "Americas"}, {"name": "Uzbekistan", "region": "Asia"}, {"name": "Vanuatu", "region": "Oceania"}, {"name": "Venezuela", "region": "Americas"}, {"name": "Vietnam", "region": "Asia"}, {"name": "Wallis and Futuna", "region": "Oceania"}, {"name": "Western Sahara", "region": "Africa"}, {"name": "Yemen", "region": "Asia"}, {"name": "Zambia", "region": "Africa"}, {"name": "Zimbabwe", "region": "Africa"}];

                scope.dtIdentification = [
                    {
                        value: '',
                        text: 'Identification'},
                    {
                        value: '1',
                        text: 'IC No.'},
                    {
                        value: '2',
                        text: 'Social Card No.'},
                    {
                        value: '3',
                        text: 'Tax Card No.'},
                    {
                        value: '4',
                        text: "Driver's License No."},
                    {
                        value: '5',
                        text: 'Student Card No.'},
                    {
                        value: '6',
                        text: 'Passport No.'},
                    {
                        value: '7',
                        text: 'Professional License No.'},
                    {
                        value: '8',
                        text: 'Singapore Blue IC No.'},
                    {
                        value: '9',
                        text: 'Singapore Pink IC No.'
                    }
                ];

                scope.dtCountryCode = [
                    {
                        value: '880',
                        text: '88 (Bangladesh)'},
                    {
                        value: '91',
                        text: '91 (India)'},
                    {
                        value: '62',
                        text: '62 (Indonesia)'},
                    {
                        value: '60',
                        text: '60 (Malaysia)'},
                    {
                        value: '63',
                        text: '63 (Philippines)'},
                    {
                        value: '65',
                        text: '65 (Singapore)'},
                    {
                        value: '66',
                        text: '66 (Thailand)'},
                    {
                        value: '84',
                        text: '84 (Vietnam)'},
                    {
                        value: '0',
                        text: 'Other'
                    }
                ];

            }


        };
    });

});