define(['appModule'], function(app) {
    app.directive('skillForm', function($compile) {

        return {
            restrict: 'A',
            /**
             * @description:
             * Scope linked the functions/attributes between controller and this directive.
             */
            scope: {
                userSkill: "=mySkillattribute",
                control: "=myControl",
                userSkillNew: "=myNewskill",
                addSkill: "&myAddskill",
                clearSkill: "&myClearskill",
                toggleSkillForm: "&myToggleform",
                toggleSkillInfo: "&myToggleinfo",
                toggleSkillBtn: "&myToggleskillbtn"
            },
            /**
             * @description:
             * Link the html document that will be control by this directive.
             */
            templateUrl: '/NewResume/app/views/resume/skillForm.html',
            link: function(scope) {
                var counter = 0;
                scope.skillLimit = false;

                var x = new Array();
                var y = new Array();

                scope.skillFControl = scope.control || {};

                scope.skillFControl.cancelSkillEdit = function() {
                    scope.cancelSkillEdit();
                };
                /**
                 * @description:
                 * This function will retrieve user's skill from JSON and loop and append into the Skills section in form format.
                 */
                scope.setEditSkill = function(passSkill, passProficiency) {
                    $("#insertNewSkill").append($compile("<form class='form-horizontal form-group' id='skill" + counter + "'><div class='col-xs-6 col-sm-6 col-md-7'><input class='form-control' placeholder='Skill Name' id='skillInput" + counter + "'value='" + passSkill + "' /></div><div class='col-xs-6 col-sm-4 col-md-4'><select class='skillFSelect col-xs-12 col-sm-12 col-md-12 no-col-padding' type='text' data-placeholder='Proficiency' selected='Advanced' id='skillSelectP" + counter + "'><option></option><option value='Advanced'>Advanced</option><option value='Intermediate'>Intermediate</option><option value='Beginner'>Beginner</option></select></div><a href='' ng-click='deleteSkill(" + counter + ")'>Delete</a></form>")(scope));
                    /*<div class="col-md-1"><div class="col-md-12 movePara skillDelLink"><a type="button" ng-click="deleteSkill()")>Delete</a></div>*/

                    $('#skillSelectP' + counter).select2().select2('val', passProficiency);

                    counter = counter + 1;
                };

                function init($elem) {
                    $elem.select2({
                        minimumResultsForSearch: -1,
                        width: 'resolve'
                    });
                }
                ;

                scope.checkLimit = function() {
                    if (counter > 9) {
                        scope.skillLimit = true;
                        counter = 10;
                    } else {
                        scope.skillLimit = false;
                    }
                };

                scope.skillFControl.getUserSkill = function() {
                    for (var x = 0; x < (scope.userSkill.length); x++) {
                        scope.setEditSkill(scope.userSkill[x].name, scope.userSkill[x].pro);
                    }
                    ;

                    scope.checkLimit();

                    scope.toggleSkillBtn();
                    scope.toggleSkillForm();
                    scope.toggleSkillInfo();
                };
                /**
                 * @description:
                 * Function used to add newly created skill.
                 */
                scope.addNewSkill = function() {
                    $("#insertNewSkill").append($compile("<form class='form-horizontal form-group' id='skill" + counter + "'><div class='col-xs-6 col-sm-6 col-md-7'><input class='form-control' placeholder='Skill Name' id='skillInput" + counter + "'/></div><div class='col-xs-6 col-sm-4 col-md-4'><select class='skillFSelect col-xs-12 col-sm-12 col-md-12 no-col-padding' type='text' data-placeholder='Proficiency' selected='Advanced' id='skillSelectP" + counter + "'><option value=''></option><option value='Advanced'>Advanced</option><option value='Intermediate'>Intermediate</option><option value='Beginner'>Beginner</option></select></div><a href='' ng-click='deleteSkill(" + counter + ")'>Delete</a></form>")(scope));
//<a type='button' ng-click='deleteSkill()')>Delete</a>
                    $('#skillSelectP' + counter).select2();

                    counter = counter + 1;

                    if (counter > 9) {
                        scope.skillLimit = true;
                        counter = 10;
                    }
                };
                /**
                 * @description:
                 * Function used to save changes made to Skills.
                 */
                scope.saveSkill = function() {
                    scope.retrieveInputValue();
                    var b = counter;
                    //alert(b);
                    for (var jk = 0; jk < b; jk++) {
                        if (document.getElementById("skillInput" + jk) !== null) {
                            scope.addingSkill(jk);
                        }
                    }
                    ;
                    /*Clearing the cache to avoid re-load value*/
                    scope.addSkill();
                    scope.userSkillNew = [];
                    scope.cancelSkillEdit();
                };

                scope.retrieveInputValue = function() {
                    var c = counter;
                    //alert(c);
                    for (var h = 0; h < c; h++) {
                        if (document.getElementById("skillInput" + h) !== null) {
                            x[h] = document.getElementById("skillInput" + h).value;
                            y[h] = document.getElementById("skillSelectP" + h).value;
                        }
                    }
                };

                scope.addingSkill = function(numb) {
                    scope.skillSet = {
                        pro: y[numb],
                        name: x[numb]
                    };
                    scope.userSkillNew.push(scope.skillSet);

                };

                scope.cancelSkillEdit = function() {
                    $(".skillFInput").val('');
                    $(".skillFSelect").val('');
                    counter = 0;
                    $("#insertNewSkill").empty();
                    scope.skillLimit = false;
                    scope.toggleSkillBtn();
                    scope.toggleSkillForm();
                    scope.toggleSkillInfo();
                };

//                scope.deleteSkill = function() {
//                    var c = (counter-1);
//
//                    $("#skill" + c).remove();
//                    
//                    counter--;
//                    scope.checkLimit();
//                };

                scope.deleteSkill = function(deleteNumber) {
                    $("#skill" + deleteNumber).remove();

                    scope.checkLimit();
                };
                /**
                 * @description:
                 * Function used to add delete skill.
                 */
                scope.dtProficiency = [
                    {
                        id: 1,
                        text: 'Advanced'},
                    {
                        id: 2,
                        text: 'Intermediate'},
                    {
                        id: 3,
                        text: 'Beginner'}
                ];
            }
        };
    });

});