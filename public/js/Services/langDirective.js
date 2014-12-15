define(['appModule'], function(app) {



    app.directive('langForm', function($compile) {

        return {
            restrict: 'A',
            /**
             * @description:
             * Scope linked the functions/attributes between controller and this directive.
             */
            scope: {
                userLanguage: "=myLanguage",
                control: "=myControl",
                userLangNew: "=myNewlang",
                toggleLangInfo: "&myToggleinfo",
                addLang: "&myAddlang",
                toggleLangForm: "&myToggleform",
                toggleLangBtn: "&myTogglelangbtn"
            },
            /**
             * @description:
             * Link the html document that will be control by this directive.
             */
            templateUrl: '/NewResume/App/Views/resume/langForm.html',
            link: function(scope) {

                var counter = 0;

                scope.langFControl = scope.control || {};
                /**
                 * @description:
                 * Store data get from JSON into array.
                 */
                var getPrimary = new Array();
                var getLang = new Array();
                var getSpoken = new Array();
                var getWritten = new Array();
                var getCert = new Array();
                var getResult = new Array();

                scope.resultLblSwitch = false;
                scope.langLimit = false;

                scope.langFControl.openForm = function() {
                    scope.toggleLangForm();
                };

                scope.langFControl.cancelLang = function() {
                    scope.cancelLangEdit();
                };

                scope.toggleRLbl = function() {
                    scope.resultLblSwitch = !scope.resultLblSwitch;
                };
                /**
                 * @description:
                 * This function will retrieve user's skill from JSON and loop and append into the Skills section in form format.
                 */
                scope.setEditLang = function() {
                    $("#insertNewLang").append($compile("<form class='form-horizontal form-group' id='lang" + counter + "'>\n\
<div class='col-xs-12 col-md-12'><div class='col-xs-12 col-md-1 expFCheckbox'>\n\
<input class='col-xs-1 col-md-12 no-col-padding input-lang-xs' type='checkbox' name='langPrimary[1][]' id='lang_primary_flag" + counter + "' value='1'>\n\
<label class='col-xs-5 col-sm-5 visible-lbl-primary no-col-padding'>Primary</label></div>\n\
<div class='col-xs-12 col-sm-12 col-md-3 no-paddingleft'>\n\
<label class='col-xs-3 col-sm-2 hidden-sm hidden-md hidden-lg lbl-lang no-col-padding'>Language</label>\n\
<select class='langFSelect col-xs-9 col-sm-7 col-md-12 no-col-padding' type='text' data-placeholder=' ' id='langSelectL" + counter + "'><option></option>" + dtLang + "</select></div>\n\
<div class='col-xs-12 col-sm-12 col-md-1 no-paddingleft'>\n\
<label class='col-xs-3 col-sm-2 hidden-sm hidden-md hidden-lg lbl-lang no-col-padding'>Spoken</label>\n\
<select class='langFSelect col-xs-9 col-sm-7 col-md-12 no-col-padding' type='text' data-placeholder=' ' id='langSelectS" + counter + "'><option value=''></option>" + dtPoints + "</select></div>\n\
<div class='col-xs-12 col-sm-12 col-md-1 no-paddingleft'>\n\
<label class='col-xs-3 col-sm-2 hidden-sm hidden-md hidden-lg lbl-lang no-col-padding'>Written</label>\n\
<select class='langFSelect col-xs-9 col-sm-7 col-md-12 no-col-padding' type='text' data-placeholder=' 'id='langSelectW" + counter + "'><option value=''></option>" + dtPoints + "</select></div>\n\
<div class='col-xs-12 col-sm-12 col-md-3 no-paddingleft'>\n\
<label class='col-xs-3 col-sm-2 hidden-sm hidden-md hidden-lg lbl-lang no-col-padding'>Certificate</label>\n\
<select class='langFSelect col-xs-9 col-sm-7 col-xs-12 col-sm-12 col-md-12 no-col-padding' type='text' data-placeholder=' ' id='langSelectR" + counter + "' ng-click='showResult(" + counter + ")'><option value='-'>--None--</option>" + dtCert + "</select></div>\n\
<div class='col-xs-12 col-md-2 no-paddingleft'>\n\
<label class='col-xs-3 col-sm-2 hidden-sm hidden-md hidden-lg lbl-lang no-col-padding'>Result</label>\n\
<div class='col-xs-9 col-sm-7 col-xs-12 col-sm-12 col-md-12 no-col-padding'><input class='form-control langFInput' id='langInputR" + counter + "' name='certResult' type='text'></div></div><a href='' ng-click='deleteLang(" + counter + ")'>Delete</a></form>")(scope));

//<a type='button' ng-click='deleteLang(" + counter + ")'>Delete</a>

                    if (scope.userLanguage[counter].primary !== "") {
                        document.getElementById("lang_primary_flag" + counter).checked = true;
                    } else {
                        document.getElementById("lang_primary_flag" + counter).checked = false;
                    }

                    $('#langSelectL' + counter).select2().select2('val', scope.userLanguage[counter].name);
                    $('#langSelectS' + counter).select2().select2('val', scope.userLanguage[counter].spoken);
                    $('#langSelectW' + counter).select2().select2('val', scope.userLanguage[counter].written);
                    $('#langSelectR' + counter).select2().select2('val', scope.userLanguage[counter].cert);
                    $('#langInputR' + counter).hide();
                    if (scope.userLanguage[counter].result !== "") {
                        scope.toggleRLbl();
                        $('#langInputR' + counter).show();
                        $('#langInputR' + counter).val(scope.userLanguage[counter].result);
                    }

                    counter = counter + 1;
                };
                /**
                 * @description:
                 * Function used to add newly created lang.
                 */
                scope.addNewLang = function() {
                    $("#insertNewLang").append($compile("<form class='form-horizontal form-group' id='lang" + counter + "'><div class='col-xs-12 col-md-12'><div class='col-xs-12 col-md-1 expFCheckbox'><input class='col-xs-1 col-md-12 no-col-padding input-lang-xs' type='checkbox' name='langPrimary[1][]' id='lang_primary_flag" + counter + "' value='1'><label class='col-xs-5 col-sm-5 visible-lbl-primary no-col-padding'>Primary</label></div><div class='col-xs-12 col-sm-12 col-md-3 no-paddingleft'><label class='col-xs-3 col-sm-2 hidden-sm hidden-md hidden-lg lbl-lang no-col-padding'>Language</label><select class='langFSelect col-xs-9 col-sm-7 col-md-12 no-col-padding' type='text' data-placeholder=' ' id='langSelectL" + counter + "'><option value=''></option>" + dtLang + "</select></div><div class='col-xs-12 col-sm-12 col-md-1 no-paddingleft'><label class='col-xs-3 col-sm-2 hidden-sm hidden-md hidden-lg lbl-lang no-col-padding'>Spoken</label><select class='langFSelect col-xs-9 col-sm-7 col-md-12 no-col-padding' type='text' data-placeholder=' ' id='langSelectS" + counter + "'><option value=''></option>" + dtPoints + "</select></div><div class='col-xs-12 col-sm-12 col-md-1 no-paddingleft'><label class='col-xs-3 col-sm-2 hidden-sm hidden-md hidden-lg lbl-lang no-col-padding'>Written</label><select class='langFSelect col-xs-9 col-sm-7 col-md-12 no-col-padding' type='text' data-placeholder=' 'id='langSelectW" + counter + "'><option value=''></option>" + dtPoints + "</select></div><div class='col-xs-12 col-sm-12 col-md-3 no-paddingleft'><label class='col-xs-3 col-sm-2 hidden-sm hidden-md hidden-lg lbl-lang no-col-padding'>Certificate</label><select class='langFSelect col-xs-9 col-sm-7 col-xs-12 col-sm-12 col-md-12 no-col-padding' type='text' data-placeholder=' ' id='langSelectR" + counter + "' ng-click='showResult(" + counter + ")'><option value='-'>--None--</option>" + dtCert + "</select></div><div class='col-xs-12 col-md-2 no-paddingleft'><label class='col-xs-3 col-sm-2 hidden-sm hidden-md hidden-lg lbl-lang no-col-padding'>Result</label><div class='col-xs-9 col-sm-7 col-xs-12 col-sm-12 col-md-12 no-col-padding'><input class='form-control langFInput' id='langInputR" + counter + "' name='certResult' type='text'></div></div><a href='' ng-click='deleteLang(" + counter + ")'>Delete</a></form>")(scope));

                    $('#langSelectL' + counter).select2();
                    $('#langSelectS' + counter).select2();
                    $('#langSelectW' + counter).select2();
                    $('#langSelectR' + counter).select2();
                    $('#langInputR' + counter).hide();
                    counter = counter + 1;

                    if (counter > 4) {
                        scope.langLimit = true;
                        counter = 5;
                    }
                };

                scope.checkLimit = function() {
                    if (counter > 4) {
                        scope.langLimit = true;
                        counter = 5;
                    } else {
                        scope.langLimit = false;
                    }
                };


                scope.langFControl.getUserLang = function() {
                    for (var x = 0; x < (scope.userLanguage.length); x++) {
                        scope.setEditLang();
                    }
                    scope.checkLimit();

                    scope.toggleLangBtn();
                    scope.toggleLangForm();
                };
                /**
                 * @description:
                 * Function used to save changes made to Languages.
                 */
                scope.saveLang = function() {
                    scope.retrieveLangInput();

                    var b = counter;
                    var jk;

                    for (jk = 0; jk < b; jk++) {
                        if (document.getElementById("langSelectL" + jk) !== null) {
                            scope.addingLang(jk);
                        }
                    }
                    ;

                    /*Clearing the cache to avoid re-load value*/
                    scope.addLang();
                    scope.userLangNew = [];
                    scope.cancelLangEdit();
                };
                /**
                 * @description:
                 * Function used to get the input entered by user.
                 */
                scope.retrieveLangInput = function() {
                    var c = counter;
                    var h;
                    for (h = 0; h < c; h++) {

                        if (document.getElementById("langSelectL" + h) !== null) {
                            if (document.getElementById("lang_primary_flag" + h).checked === true) {
                                getPrimary[h] = "(Primary)";

                            } else {
                                getPrimary[h] = "";
                            }

                            getLang[h] = document.getElementById("langSelectL" + h).value;
                            getSpoken[h] = document.getElementById("langSelectS" + h).value;
                            getWritten[h] = document.getElementById("langSelectW" + h).value;
                            getCert[h] = document.getElementById("langSelectR" + h).value;
                            var inputRVal = document.getElementById("langInputR" + h).value;

                            if (inputRVal === "") {
                                getResult[h] = "";

                            } else {
                                getResult[h] = inputRVal;
                            }
                        }
                    }
                };

                scope.addingLang = function(numb) {
                    scope.langSet = {
                        name: getLang[numb],
                        primary: getPrimary[numb],
                        spoken: getSpoken[numb],
                        written: getWritten[numb],
                        cert: getCert[numb],
                        result: getResult[numb]
                    };
                    scope.userLangNew.push(scope.langSet);

                };


                scope.cancelLangEdit = function() {
                    $(".langFInput").val('');
                    $(".langFSelect").val('');
                    $("#insertNewLang").empty();
                    scope.toggleLangBtn();
                    scope.toggleLangForm();
                    scope.toggleLangInfo();
                    scope.langLimit = false;
                    counter = 0;
                    //scope.toggleSkillInfo();
                };

                scope.showResult = function(resultBoxIndex) {
                    if (($("#langSelectR" + resultBoxIndex).val() === "") || ($("#langSelectR" + resultBoxIndex).val() === "-")) {
                        $('resultLblSwitch').hide();
                        $('#langInputR' + resultBoxIndex).hide();
                        $('#langInputR' + resultBoxIndex).val("");
                    } else {
                        $('resultLblSwitch').show();
                        $('#langInputR' + resultBoxIndex).val("");
                        $('#langInputR' + resultBoxIndex).show();
                    }
                    ;
                };

                scope.deleteLang = function(deleteNumber) {
                    $("#lang" + deleteNumber).remove();
                    
                    scope.checkLimit();
                };

                /**
                 * @description:
                 * Data for select2
                 */
                var dtLang = "<option value='Arabic'>Arabic</option><option value='Bahasa Indonesia'>Bahasa Indonesia</option><option value='Bahasa Malaysia'>Bahasa Malaysia</option><option value='Bengali'>Bengali</option><option value='Chinese'>Chinese</option><option value='Dutch'>Dutch</option><option value='English'>English</option><option value='Filipino'>Filipino</option><option value='French'>French</option><option value='German'>German</option><option value='Hebrew'>Hebrew</option><option value='Hindi'>Hindi</option><option value='Italian'>Italian</option><option value='Japanese'>Japanese</option><option value='Korean'>Korean</option><option value='Portuguese'>Portuguese</option><option value='Russian'>Russian</option><option value='Spanish'>Spanish</option><option value='Tamil'>Tamil</option><option value='Thai'>Thai</option><option value='Vietnamese'>Vietnamese</option>";

                var dtPoints = "<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option>";

                var dtCert = "<option value='A Levels'>A Levels</option><option value='CPE'>CPE</option><option value='DALF C1'>DALF C1</option><option value='DALF C2'>DALF C2</option><option value='DELF A1'>DELF A1</option><option value='DELF A2'>DELF A2</option><option value='DELF B1'>DELF B1</option><option value='DELF B2'>DELF B2</option><option value='HSK Level 1'>HSK Level 1</option><option value='HSK Level 2'>HSK Level 2</option><option value='HSK Level 3'>HSK Level 3</option><option value='HSK Level 4'>HSK Level 4</option><option value='HSK Level 5'>HSK Level 5</option><option value='HSK Level 6'>HSK Level 6</option><option value='IELTS'>IELTS</option><option value='JLPT N1'>JLPT N1</option><option value='JLPT N2'>JLPT N2</option><option value='JLPT N3'>JLPT N3</option><option value='JLPT N4'>JLPT N4</option><option value='JLPT N5'>JLPT N5</option><option value='MUET'>MUET</option><option value='N Level'>N Level</option><option value='O Levels'>O Levels</option><option value='PMR'>PMR</option><option value='PSLE'>PSLE</option><option value='SPM'>SPM</option><option value='TCF A1'>TCF A1</option><option value='TCF A2'>TCF A2</option><option value='TCF B1'>TCF B1</option><option value='TCF B2'>TCF B2</option><option value='TCF C1'>TCF C1</option><option value='TCF C2'>TCF C2</option><option value='TOEFL'>TOEFL</option><option value='TOEIC'>TOEIC</option><option value='TOPIK Advanced'>TOPIK Advanced</option><option value='TOPIK Intermediate'>TOPIK Intermediate</option><option value='TOPIK Beginner'>TOPIK Beginner</option><option value='UPSR'>UPSR</option><option value='Others'>Others</option>";
            }
        };
    });

});