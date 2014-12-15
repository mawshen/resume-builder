define(['appModule'], function(app) {
    app.directive('expForm', function() {
        return {
            restrict: 'A',
            /**
             * @description:
             * Scope linked the functions/attributes between controller and this directive.
             */
            scope: {
                userExpNew: "=myAttribute",
                userExp: "=myExpattribute",
                control: "=myControl",
                addExp: "&myAddexp",
                toggleExpEditForm: "&myToggleeditform",
                toggleExpAddForm: "&myToggleform",
                toggleEditBtn: "&myToggleebtn"
            },
            /**
             * @description:
             * Link the html document that will be control by this directive.
             */
            templateUrl: '/NewResume/App/Views/resume/expForm.html',
            link: function(scope) {
                /**
                 * @description:
                 * scope.expFControl linked with the scope.controlDirFunction in previewController to let it access the functions within this directive.
                 */
                scope.expFControl = scope.control || {};

                scope.expFControl.cancelExpEdit = function() {
                    scope.cancelExpEdit();
                };
                scope.delIndex = 0;
                scope.position = null;
                scope.delSwitch = false;
                scope.isEdit = false;
                
                scope.initiateSelectForm = function(){
                    $("#expSelectSM").select2();
                    $("#expSelectEM").select2();
                    $("#expSelectS").select2();
                    $("#expSelectIn").select2();
                    $("#expSelectPLvl").select2();
                    $("#expSelectC").select2();
                    $("#expSelectSal").select2();
                };
                 
                 scope.initiateSelectForm();
                 
                /**
                 * @description:
                 * Delete function will be available only during edit mode.
                 */
                scope.expFControl.controlDelete = function() {
                    scope.delSwitch = true;
                };
                
                scope.expFControl.getShowMe = function() {
                    return scope.showMe;
                };

                /**
                 * @description:
                 * Function to delete an Experience.
                 */
                scope.deleteExp = function() {
                    scope.userExp.splice(scope.delIndex, 1);
                    scope.cancelExpEdit();
                    scope.resetBtn();
                };

                /**
                 * @description:
                 * This function let the previewController to pass the experience that need to be edit. All the data will loop into the edit form through the passing method.
                 */
                scope.expFControl.getUserExp = function(pos, uPosition, uCompany, uLocation) {
                    scope.position = pos;
                    scope.isEdit = true;

                    for (var counter = 0; counter < scope.userExp.length; counter++) {
                        if (scope.userExp[counter].position === uPosition && scope.userExp[counter].company === uCompany && scope.userExp[counter].location === uLocation) {
                            scope.delIndex = counter;
                            
                            scope.positionc = scope.userExp[counter].position;
                            scope.companyc = scope.userExp[counter].company;
                            $("#userExpEditor #expSelectSM").select2().select2("val", scope.userExp[counter].startMonth);
                            scope.startMonthc = scope.userExp[counter].startMonth;
                            scope.startYearc = scope.userExp[counter].startYear;
                            $("#userExpEditor #expSelectEM").select2().select2("val", scope.userExp[counter].endMonth);
                            scope.endMonthc = scope.userExp[counter].endMonth;
                            scope.endYearc = scope.userExp[counter].endYear;
                            $("#userExpEditor #expSelectS").select2().select2("val", scope.userExp[counter].specialization);
                            scope.specializationc = scope.userExp[counter].specialization;
                            $("#userExpEditor #expSelectIn").select2().select2("val", scope.userExp[counter].industry);
                            scope.industryc = scope.userExp[counter].industry;
                            $("#userExpEditor #expSelectPLvl").select2().select2("val", scope.userExp[counter].pLevel);
                            scope.pLevelc = scope.userExp[counter].pLevel;
                            $("#userExpEditor #expSelectC").select2().select2("val", scope.userExp[counter].currency);
                            scope.currencyc = scope.userExp[counter].currency;
                            $("#userExpEditor #expSelectSal").select2().select2("val", scope.userExp[counter].salary);
                            scope.salaryc = scope.userExp[counter].salary;
                            scope.locationc = scope.userExp[counter].location;
                            scope.achievementc = scope.userExp[counter].achievement;
                        }
                    }
                    scope.toggleExpEditForm();
                };
                
                

                /**
                 * @description:
                 * Cancel the edit/add form. All data field will be reset.
                 */
                scope.cancelExpEdit = function() {
                    scope.positionc = '';
                    $("#inputPosition").val("");
                    scope.companyc = '';
                    $("#inputCompany").val("");
                    $("#expSelectSM").select2().select2("val", "");
                    scope.startMonthc = '';
                    scope.startYearc = '';
                    $("#inputStartYear").val("");
                    $("#expSelectEM").select2().select2("val", "");
                    scope.endMonthc = '';
                    scope.endYearc = '';
                    $("#inputEndYear").val("");
                    $('#checkboxPresent').prop("checked", false);
                    $("#expSelectS").select2().select2("val", "");
                    scope.specializationc = '';
                    $("#expSelectIn").select2().select2("val", "");
                    scope.industryc = '';
                    $("#expSelectPLvl").select2().select2("val", "");
                    scope.pLevelc = '';
                    $("#expSelectC").select2().select2("val", "");
                    scope.currencyc = '';
                    $("#expSelectSal").select2().select2("val", "");
                    scope.salaryc = '';
                    scope.locationc = "";
                    $("#inputLocation").val("");
                    scope.achievementc = "";
                    $("#textareaAchievement").val("");
                    scope.delSwitch = false;
                    scope.position = null;
                    scope.showMe = 0;
                    scope.isEdit = false;
                };

                /**
                 * @description:
                 * Reset all the form/btn's state to make them show/hide.
                 */
                scope.resetBtn = function() {
                    scope.toggleEditBtn();
                    scope.toggleExpAddForm();
                    scope.toggleExpEditForm();
                };

                /**
                 * @description:
                 * Function used to add newly created experience.
                 */
                scope.addNewExperience = function() {
//                var setUID = 0;
//
//                for (var checker = 0; checker <= scope.userExp.length; checker++) {
//                    if (scope.userExp[checker] === null) {
//                        alert(checker);
//                    } else {
//                        setUID = checker;
//                    }
//                }
//                scope.userExpNew.uID = setUID;
                    scope.userExpNew.position = scope.positionc;
                    scope.userExpNew.company = scope.companyc;
                    scope.userExpNew.startMonth = scope.startMonthc;
                    scope.userExpNew.startYear = scope.startYearc;
                    scope.userExpNew.endMonth = scope.endMonthc;
                    scope.userExpNew.endYear = scope.endYearc;

                    var sMa = scope.toMonth(scope.startMonthc);
                    var eMa = scope.toMonth(scope.endMonthc);

                    scope.userExpNew.duration = scope.calcM(sMa, eMa, scope.startYearc, scope.endYearc);
                    scope.userExpNew.specialization = scope.specializationc;
                    scope.userExpNew.location = scope.locationc;
                    scope.userExpNew.industry = scope.industryc;
                    scope.userExpNew.pLevel = scope.pLevelc;
                    scope.userExpNew.currency = scope.currencyc;
                    scope.userExpNew.salary = scope.salaryc;
                    scope.userExpNew.achievement = scope.achievementc;

//                for (var achecker = 0; achecker < scope.userExp.length; achecker++) {
//                    if (scope.userExp[achecker].position === scope.userExpNew.position && scope.userExp[achecker].company === scope.userExpNew.company && scope.userExp[achecker].location === scope.userExpNew.location) {
//                        scope.userExp.splice(achecker, 1);
//                    }
//                }

                    scope.addExp();

                    scope.cancelExpEdit();
                    scope.resetBtn();
                };


                scope.changeExp = function() {
                    scope.userExp[scope.position].position = scope.positionc;
                    scope.userExp[scope.position].company = scope.companyc;
                    scope.userExp[scope.position].startMonth = scope.startMonthc;
                    scope.userExp[scope.position].startYear = scope.startYearc;
                    scope.userExp[scope.position].endMonth = scope.endMonthc;
                    scope.userExp[scope.position].endYear = scope.endYearc;

                    var sMa = scope.toMonth(scope.startMonthc);
                    var eMa = scope.toMonth(scope.endMonthc);

                    scope.userExp[scope.position].duration = scope.calcM(sMa, eMa, scope.startYearc, scope.endYearc);
                    scope.userExp[scope.position].specialization = scope.specializationc;
                    scope.userExp[scope.position].location = scope.locationc;
                    scope.userExp[scope.position].industry = scope.industryc;
                    scope.userExp[scope.position].pLevel = scope.pLevelc;
                    scope.userExp[scope.position].currency = scope.currencyc;
                    scope.userExp[scope.position].salary = scope.salaryc;
                    scope.userExp[scope.position].achievement = scope.achievementc;

                    scope.cancelExpEdit();
                    scope.resetBtn();
                };
                
                /**
                 * @description:
                 * Function calculate the duration (in months).
                 */
                scope.calcM = function(sM, eM, sY, eY) {
                    var diffY = (eY - sY) - 1;
                    var sDM = (12 - sM) + 1;
                    var sEM = eM;

                    var yM = (diffY * 12);

                    var uM = (sDM + sEM);

                    var totalM = yM + uM;

                    return totalM;
                };

                scope.toMonth = function(m) {
                    switch (m) {
                        case "Jan":
                            return 1;
                            break;
                        case "Feb":
                            return 2;
                            break;
                        case "Mar":
                            return 3;
                            break;
                        case "Apr":
                            return 4;
                            break;
                        case "May":
                            return 5;
                            break;
                        case "Jun":
                            return 6;
                            break;
                        case "Jul":
                            return 7;
                            break;
                        case "Aug":
                            return 8;
                            break;
                        case "Sept":
                            return 9;
                            break;
                        case "Oct":
                            return 10;
                            break;
                        case "Nov":
                            return 11;
                            break;
                        case "Dec":
                            return 12;
                            break;
                    }
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

                scope.dtSpec = [
                    {
                        text: 'Accounting/Finance',
                        children: [
                            {
                                id: 130,
                                text: 'Audit & Taxation'
                            },
                            {
                                id: 135,
                                text: 'Banking/Financial'
                            },
                            {
                                id: 132,
                                text: 'Corporate Finance/Investment'
                            },
                            {
                                id: 131,
                                text: 'General/Cost Accounting'
                            }
                        ]
                    },
                    {
                        text: 'Admin/Human Resources',
                        children: [
                            {
                                id: 133,
                                text: 'Clerical/Administrative'
                            },
                            {
                                id: 137,
                                text: 'Human Resources'
                            },
                            {
                                id: 146,
                                text: 'Secretarial'
                            },
                            {
                                id: 148,
                                text: 'Top Management'
                            }
                        ]
                    },
                    {
                        text: 'Arts/Media/Communications',
                        children: [
                            {
                                id: 100,
                                text: 'Advertising'
                            },
                            {
                                id: 101,
                                text: 'Arts/Creative Design'
                            },
                            {
                                id: 106,
                                text: 'Entertainment'
                            },
                            {
                                id: 141,
                                text: 'Public Relations'
                            }
                        ]
                    },
                    {
                        text: 'Building/Construction',
                        children: [
                            {
                                id: 180,
                                text: 'Architect/Interior Design'
                            },
                            {
                                id: 184,
                                text: 'Civil Engineering/Construction'
                            },
                            {
                                id: 150,
                                text: 'Property/Real Estate'
                            },
                            {
                                id: 198,
                                text: 'Quantity Surveying'
                            }
                        ]
                    },
                    {
                        text: 'Computer/Information Technology',
                        children: [
                            {
                                id: 192,
                                text: 'IT - Hardware'
                            },
                            {
                                id: 193,
                                text: 'IT - Network/Sys/DB Admin'
                            },
                            {
                                id: 191,
                                text: 'IT - Software'
                            }
                        ]
                    },
                    {
                        text: 'Education/Training',
                        children: [
                            {
                                id: 105,
                                text: 'Education'
                            },
                            {
                                id: 121,
                                text: 'Training & Dev.'
                            }
                        ]
                    },
                    {
                        text: 'Engineering',
                        children: [
                            {
                                id: 185,
                                text: 'Chemical Engineering'
                            },
                            {
                                id: 187,
                                text: 'Electrical Engineering'
                            },
                            {
                                id: 186,
                                text: 'Electronics Engineering'
                            },
                            {
                                id: 189,
                                text: 'Environmental Engineering'
                            },
                            {
                                id: 200,
                                text: 'Industrial Engineering'
                            },
                            {
                                id: 195,
                                text: 'Mechanical/Automotive Engineering'
                            },
                            {
                                id: 190,
                                text: 'Oil/Gas Engineering'
                            },
                            {
                                id: 188,
                                text: 'Other Engineering'
                            }
                        ]
                    },
                    {
                        text: 'Healthcare',
                        children: [
                            {
                                id: 113,
                                text: 'Doctor/Diagnosis'
                            },
                            {
                                id: 112,
                                text: 'Pharmacy'
                            },
                            {
                                id: 111,
                                text: 'Nurse/Medical Support'
                            }
                        ]
                    },
                    {
                        text: 'Hotel/Restaurant',
                        children: [
                            {
                                id: 107,
                                text: 'Food/Beverage/Restaurant'
                            },
                            {
                                id: 114,
                                text: 'Hotel/Tourism'
                            }
                        ]
                    },
                    {
                        text: 'Manufacturing',
                        children: [
                            {
                                id: 115,
                                text: 'Maintenance'
                            },
                            {
                                id: 194,
                                text: 'Manufacturing'
                            },
                            {
                                id: 196,
                                text: 'Process Design & Control'
                            },
                            {
                                id: 140,
                                text: 'Purchasing/Material Mgmt'
                            },
                            {
                                id: 197,
                                text: 'Quality Assurance'
                            }
                        ]
                    },
                    {
                        text: 'Sales/Marketing',
                        children: [
                            {
                                id: 142,
                                text: 'Sales - Corporate'
                            },
                            {
                                id: 139,
                                text: 'Marketing/Business Dev'
                            },
                            {
                                id: 149,
                                text: 'Merchandising'
                            },
                            {
                                id: 145,
                                text: 'Retail Sales'
                            },
                            {
                                id: 143,
                                text: 'Sales - Eng/Tech/IT'
                            },
                            {
                                id: 144,
                                text: 'Sales - Financial Services'
                            },
                            {
                                id: 151,
                                text: 'Telesales/Telemarketing'
                            }
                        ]
                    },
                    {
                        text: 'Sciences',
                        children: [
                            {
                                id: 103,
                                text: 'Actuarial/Statistics'
                            },
                            {
                                id: 102,
                                text: 'Agriculture'
                            },
                            {
                                id: 181,
                                text: 'Aviation'
                            },
                            {
                                id: 182,
                                text: 'Biotechnology'
                            },
                            {
                                id: 183,
                                text: 'Chemistry'
                            },
                            {
                                id: 108,
                                text: 'Food Tech/Nutritionist'
                            },
                            {
                                id: 109,
                                text: 'Geology/Geophysics'
                            },
                            {
                                id: 199,
                                text: 'Science & Technology'
                            }
                        ]
                    },
                    {
                        text: 'Services',
                        children: [
                            {
                                id: 119,
                                text: 'Security/Armed Forces'
                            },
                            {
                                id: 134,
                                text: 'Customer Service'
                            },
                            {
                                id: 147,
                                text: 'Logistics/Supply Chain'
                            },
                            {
                                id: 138,
                                text: 'Law/Legal Services'
                            },
                            {
                                id: 118,
                                text: 'Personal Care'
                            },
                            {
                                id: 120,
                                text: 'Social Services'
                            },
                            {
                                id: 152,
                                text: 'Tech & Helpdesk Support'
                            }
                        ]
                    },
                    {
                        text: 'Others',
                        children: [
                            {
                                id: 110,
                                text: 'General Work'
                            },
                            {
                                id: 104,
                                text: 'Journalist/Editors'
                            },
                            {
                                id: 117,
                                text: 'Publishing'
                            },
                            {
                                id: 116,
                                text: 'Others'
                            }
                        ]
                    }
                ];

                scope.dtIndustry = [
                    {
                        id: "60",
                        text: "Accounting / Audit / Tax Services"
                    },
                    {
                        id: "3",
                        text: "Advertising / Marketing / Promotion / PR"
                    },
                    {
                        id: "1",
                        text: "Aerospace / Aviation / Airline"
                    },
                    {
                        id: "4",
                        text: "Agricultural / Plantation / Poultry / Fisheries"
                    },
                    {
                        id: "5",
                        text: "Apparel"
                    },
                    {
                        id: "61",
                        text: "Architectural Services / Interior Designing"
                    },
                    {
                        id: "2",
                        text: "Arts / Design / Fashion"
                    },
                    {
                        id: "6",
                        text: "Automobile / Automotive Ancillary / Vehicle"
                    },
                    {
                        id: "7",
                        text: "Banking / Financial Services"
                    },
                    {
                        id: "39",
                        text: "BioTechnology / Pharmaceutical / Clinical research"
                    },
                    {
                        id: "58",
                        text: "Call Center / IT-Enabled Services / BPO"
                    },
                    {
                        id: "8",
                        text: "Chemical / Fertilizers / Pesticides"
                    },
                    {
                        id: "9",
                        text: "Computer / Information Technology (Hardware)"
                    },
                    {
                        id: "10",
                        text: "Computer / Information Technology (Software)"
                    },
                    {
                        id: "11",
                        text: "Construction / Building / Engineering"
                    },
                    {
                        id: "12",
                        text: "Consulting (Business &amp; Management)"
                    },
                    {
                        id: "13",
                        text: "Consulting (IT, Science, Engineering &amp; Technical)"
                    },
                    {
                        id: "15",
                        text: "Consumer Products / FMCG"
                    },
                    {
                        id: "16",
                        text: "Education"
                    },
                    {
                        id: "17",
                        text: "Electrical &amp; Electronics"
                    },
                    {
                        id: "18",
                        text: "Entertainment / Media"
                    },
                    {
                        id: "19",
                        text: "Environment / Health / Safety"
                    },
                    {
                        id: "62",
                        text: "Exhibitions / Event management / MICE"
                    },
                    {
                        id: "20",
                        text: "Food &amp; Beverage / Catering / Restaurant"
                    },
                    {
                        id: "63",
                        text: "Gems / Jewellery"
                    },
                    {
                        id: "23",
                        text: "General &amp; Wholesale Trading"
                    },
                    {
                        id: "21",
                        text: "Government / Defence"
                    },
                    {
                        id: "22",
                        text: "Grooming / Beauty / Fitness"
                    },
                    {
                        id: "24",
                        text: "Healthcare / Medical"
                    },
                    {
                        id: "25",
                        text: "Heavy Industrial / Machinery / Equipment"
                    },
                    {
                        id: "26",
                        text: "Hotel / Hospitality"
                    },
                    {
                        id: "27",
                        text: "Human Resources Management / Consulting"
                    },
                    {
                        id: "28",
                        text: "Insurance"
                    },
                    {
                        id: "29",
                        text: "Journalism"
                    },
                    {
                        id: "30",
                        text: "Law / Legal"
                    },
                    {
                        id: "31",
                        text: "Library / Museum"
                    },
                    {
                        id: "35",
                        text: "Manufacturing / Production"
                    },
                    {
                        id: "33",
                        text: "Marine / Aquaculture"
                    },
                    {
                        id: "34",
                        text: "Mining"
                    },
                    {
                        id: "36",
                        text: "Non-Profit Organisation / Social Services / NGO"
                    },
                    {
                        id: "37",
                        text: "Oil / Gas / Petroleum"
                    },
                    {
                        id: "38",
                        text: "Others"
                    },
                    {
                        id: "41",
                        text: "Polymer / Plastic / Rubber / Tyres"
                    },
                    {
                        id: "42",
                        text: "Printing / Publishing"
                    },
                    {
                        id: "43",
                        text: "Property / Real Estate"
                    },
                    {
                        id: "45",
                        text: "R&amp;D"
                    },
                    {
                        id: "64",
                        text: "Repair and Maintenance Services"
                    },
                    {
                        id: "46",
                        text: "Retail / Merchandise"
                    },
                    {
                        id: "47",
                        text: "Science &amp; Technology"
                    },
                    {
                        id: "65",
                        text: "Security / Law Enforcement"
                    },
                    {
                        id: "59",
                        text: "Semiconductor / Wafer Fabrication"
                    },
                    {
                        id: "49",
                        text: "Sports"
                    },
                    {
                        id: "50",
                        text: "Stockbroking / Securities"
                    },
                    {
                        id: "51",
                        text: "Telecommunication"
                    },
                    {
                        id: "52",
                        text: "Textiles / Garment"
                    },
                    {
                        id: "53",
                        text: "Tobacco"
                    },
                    {
                        id: "54",
                        text: "Transportation / Logistics"
                    },
                    {
                        id: "55",
                        text: "Travel / Tourism"
                    },
                    {
                        id: "56",
                        text: "Utilities / Power"
                    },
                    {
                        id: "57",
                        text: "Wood / Fibre / Paper"
                    }
                ];

                scope.dtLevel = [
                    {
                        id: 1,
                        text: 'Senior Manager'
                    },
                    {
                        id: 2,
                        text: 'Manager'
                    },
                    {
                        id: 3,
                        text: 'Senior Executive'
                    },
                    {
                        id: 4,
                        text: 'Junior Executive'
                    },
                    {
                        id: 5,
                        text: 'Entry Level'
                    },
                    {
                        id: 6,
                        text: 'Non-Executive'
                    }
                ];

                scope.dtCurrency = [
                    {
                        id: 'AUD',
                        text: 'AUD'
                    },
                    {
                        id: 'AUD',
                        text: 'AUD'
                    },
                    {
                        id: 'BDT',
                        text: 'BDT'
                    },
                    {
                        id: 'CNY',
                        text: 'CNY'
                    },
                    {
                        id: 'EUR',
                        text: 'EUR'
                    },
                    {
                        id: 'GBP',
                        text: 'GBP'
                    },
                    {
                        id: 'HKD',
                        text: 'HKD'
                    },
                    {
                        id: 'IDR',
                        text: 'IDR'
                    },
                    {
                        id: 'INR',
                        text: 'INR'
                    },
                    {
                        id: 'JPY',
                        text: 'JPY'
                    },
                    {
                        id: 'MOP',
                        text: 'MOP'
                    },
                    {
                        id: 'MYR',
                        text: 'MYR'
                    },
                    {
                        id: 'NZD',
                        text: 'NZD'
                    },
                    {
                        id: 'PHP',
                        text: 'PHP'
                    },
                    {
                        id: 'SGD',
                        text: 'SGD'
                    },
                    {
                        id: 'THB',
                        text: 'THB'
                    },
                    {
                        id: 'USD',
                        text: 'USD'
                    },
                    {
                        id: 'VND',
                        text: 'VND'
                    }
                ];

                scope.dtSalary = [
                    {
                        id: '0',
                        text: '0-500'
                    },
                    {
                        id: '1',
                        text: '501-1000'
                    },
                    {
                        id: '2',
                        text: '1001-2000'
                    },
                    {
                        id: '3',
                        text: '2001-3000'
                    },
                    {
                        id: '4',
                        text: '3001-4000'
                    },
                    {
                        id: '5',
                        text: '4001-5000'
                    },
                    {
                        id: '6',
                        text: '5001-6000'
                    },
                    {
                        id: '7',
                        text: '6001-7000'
                    },
                    {
                        id: '8',
                        text: '7001-8000'
                    },
                    {
                        id: '9',
                        text: '8001-9000'
                    },
                    {
                        id: '10',
                        text: '9001-10000'
                    },
                    {
                        id: '11',
                        text: '10001-15000'
                    },
                    {
                        id: '12',
                        text: 'Above 15000'
                    }
                ];


            }
        };
    });

});