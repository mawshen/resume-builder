@extends('layouts/preview-layout')

@section('content')


	<!--Fluid Content!-->

<div class="container containfluid preview-resume-panel" ng-init='candidate=<% $candidateJson %>'>

{{candidate}}
    <!--Summary Info -->
    <div class="col-xs-12 summary-section" ng-init='user=<% $aboutJson %>; salary="N/A"'>
        <!-- Name + Position-->

        <div class="col-md-12 user-pic">

            <img ng-src=" {{ user[0].picUrl }}" class="profile-picture" style="min-width: 152px;">

            <div class="expected-salary">
                <div class="expected-salary-label">Expected Salary : </div>
                <div class="expected-salary-output">
                    {{ salary }}
                </div>
            </div>         
        </div>

        <div class="col-sm-offset-7 col-sm-5 col-md-offset-8 col-md-4 visible-md visible-sm visible-lg update-info">Last Updated: {{lastUpdate}}</div>

        <div class="col-xs-12 col-sm-12 col-md-offset-3 col-md-9 margin-btm resume-header-top">
            <div class="col-md-12">
                <div class="col-xs-12" id="lbl-preview-output-name">{{candidate.firstname.value}} {{candidate.lastname.value}}</div>
                <div class="col-xs-12" id="lbl-preview-output-summary">{{candidate.position.value}} at {{candidate.company.value}}</div>
            </div>
        </div>

        <div class="col-xs-12 summary-highlighted">
            <div class="col-md-12">
                <!-- Basic Info-->
                <div class="col-xs-12 col-sm-8 col-md-offset-3 col-md-6 summary-highlighted-left">
                    <div class="">
                        <div class="col-xs-12 col-sm-3 col-md-3 lbl-preview-current-detail">
                            {{candidate.experience.tag}}
                        </div>
                        <div class="col-xs-12 col-sm-9 col-md-9 margin-btm">
                            {{candidate.experience.value}}
                        </div>
                    </div>

                    <div class="">
                        <div class="col-xs-12 col-sm-3 col-md-3 lbl-preview-current-detail">
                            {{candidate.pposition.tag}}
                        </div>
                        <div class="col-xs-12 col-sm-9 col-md-9">
                            <ul class="no-listyle">
                                <li>{{candidate.pposition.value}}</li>
                                <li>{{candidate.pcompany.value}}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="">
                        <div class="col-xs-12 col-sm-3 col-md-3 lbl-preview-current-detail">
                            {{candidate.university.label}}
                        </div>
                        <div class="col-xs-12 col-sm-9 col-md-9">
                            <ul class="no-listyle">
                                <li>{{candidate.university.value}}</li>
                                <li>{{candidate.qualification.value}} of {{candidate.fieldofstudy.value}}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="">
                        <div class="col-xs-12 col-sm-3 col-md-3 lbl-preview-current-detail">
                            {{candidate.nationality.label}}
                        </div>
                        <div class="col-xs-12 col-sm-9 col-md-9">
                            <ul class="no-listyle">
                                <li>{{candidate.nationality.value}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--Seperate-->
                <div class="col-xs-12 col-sm-4 col-md-3 summary-highlighted-right">
                    <div class="">
                        <div class="col-xs-3 summary-right-icon">
                            <span class="icon-phone preview-icon"></span>
                        </div>
                        <div class="col-xs-9 summary-details">
                            <ul class="no-listyle ">
                                <li>{{candidate.about.value}}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="">
                        <div class="col-xs-3 summary-right-icon">
                            <span class="icon-envelope-o preview-icon"></span>
                        </div>
                        <div class="col-xs-9 summary-details">
                            <ul class="no-listyle">
                                <li>{{candidate.email.value}}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="">
                        <div class="col-xs-3 summary-right-icon">
                            <span class="icon-user preview-icon"></span>
                        </div>
                        <div class="col-xs-9 summary-details">
                            <ul class="no-listyle">
                                <li>{{candidate.age.value}}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="">
                        <div class="col-xs-3 summary-right-icon">
                            <span class="icon-location preview-icon"></span>
                        </div>
                        <div class="col-xs-9 summary-details">
                            <ul class="no-listyle">
                                <li>{{candidate.mylocation.value}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Summary Info Ends here-->


    <!--Experience Info-->
    <div class="col-xs-12 no-paddingleft no-paddingright resume-experience-detail" ng-init='userExp=<% $expJson %>'>
        <!--        <div class="breakLine"></div>-->
        <div class="col-xs-12 col-sm-12 col-md-12 resume-section">
            <span class="icon-briefcase x2"></span>
            <span class="exp-title">{{candidate.experience.label}}</span>
            <span ng-show="editSwitch == true" id="editButtons"><a class="add-button" href="" ng-click='toggleExpAddForm();
                    toggleEditBtn()'><span class="icon-plus-circle"></span>Add</a></span>
        </div>

        <!--EXPERIENCE EDITOR START HERE-->

        <div class="col-xs-12 focus-edit" ng-show="expAddFormSwitch == true">
            <div exp-form my-attribute="userExpNew" my-expattribute="userExp" my-addexp="addExp()" my-getindex="getExpIndex()" my-toggleform="toggleExpAddForm()" my-toggleebtn="toggleEditBtn()" my-control="controlDirFunction"></div>
        </div>

        <!--EXPERIENCE EDITOR ENDS HERE-->
        <div ng-repeat="user in userExp| orderBy:'startYear':true">
            <div class="col-xs-12 col-sm-12 col-md-12 resume-detail-item" ng-class="{ 'hideMe' : hideExp == $index, 'showMe' : !expEditFormSwitch }">
                <div class="col-md-3 exp-duration visible-sm visible-md visible-lg">
                    <span>{{user.startMonth}} {{user.startYear}} - {{user.endMonth}} {{user.endYear}} <br/> {{user.duration}}</span>
                </div>
                <div class="col-xs-10 col-md-7">
                    <div class="content-alignment movePara">
                        <ul class="general-font-size no-listyle resume-detail-title">
                            <li class="">{{user.position}}</li>

                        </ul>
                        <ul class="no-listyle inline-listyle resume-important-detail">
                            <li class="">{{user.company}}</li>
                            <li class="">| </li>
                            <li class=""><span>{{user.location}}</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-2 col-md-2" ng-show="editSwitch == true">                    
                    <span class="edit-button" ><a href="" ng-click=""><span class="icon-edit" ng-click="editMyExperience($index, user.position, user.company, user.location);toggleEditBtn();"></span></a></span>
                </div>

                <div class="col-xs-12 col-md-offset-3 col-md-9">
                    <ul class="general-font-size no-listyle">
                        <li class="visible-xs"><span id="myDuration">{{user.startMonth}} {{user.startYear}} - {{user.endMonth}} {{user.endYear}} ({{user.duration}} months)</span></li>
                        <li class="resume-label-dark-grey">{{user.currency}} {{user.salary}}</li>
                    </ul>
                </div>

                <div class="col-xs-12 col-md-offset-3 col-md-9">
                    <div class="edit-achieve resume-label-dark-grey" ng-bind-html="getHtml(user.achievement)">
                    </div>
                    <br/>
                </div>

            </div>

            <div class="col-xs-12 focus-edit" ng-show="expEditFormSwitch == true" id="userExpEditor" ng-if="showExpEdit == $index">
                <div exp-form my-attribute="userExpNew" my-expattribute="userExp" my-addexp="addExp()" my-getindex="showExpEdit == $indexgetExpIndex()"  my-toggleeditform="toggleExpEditForm()" my-toggleebtn="toggleEditBtn()" my-control="controlDirFunction"></div>
            </div>
        </div>



    </div>
    <!--Experience Ends here-->


    <!--Education Info-->
    <div class="col-xs-12 no-paddingleft no-paddingright resume-education-detail" ng-init='userEdu=<% $eduJson %>'>
        <hr/>

        <div class="col-xs-12 col-sm-12 col-md-12 resume-section">
            <span class="icon-graduation x2"></span>
            <span class="edu-title">{{candidate.university.tag}}</span>
            <span ng-show="editSwitch == true" id="editButtons"><a class="add-button" href="" ng-click='toggleEduAddForm();
                    toggleEditBtn()'><span class="icon-plus-circle"></span>Add</a></span>
        </div>

        <!--Education editor starts here -->
        <div class="col-xs-12 focus-edit" ng-show="eduAddFormSwitch == true" id="addThisEduAdd">
            <div edu-form my-attribute="userEduNew" my-eduattribute="userEdu" my-addedu="addEdu()" my-toggleform="toggleEduAddForm()" my-toggleebtn="toggleEditBtn()" my-control="controlDirFunction"></div>
        </div>

        <!--Education expander ends here -->

        <div ng-repeat="user in userEdu">
            <div class="col-xs-12 col-sm-12 col-md-12 resume-detail-item" ng-class="{'hideMe' : hideEdu == $index, 'showMe' : !eduEditFormSwitch}">
                <div class="col-md-3 exp-duration visible-sm visible-md visible-lg">
                    <span>{{user.gradMonth}} {{user.gradYear}}</span>
                </div>
                <div class="col-xs-10 col-md-7">

                    <ul class="no-listyle resume-detail-title" >
                        <li class="important-text">{{user.university}}</li>
                    </ul>
                    <ul class="li-secondTitle no-listyle inline-listyle resume-important-detail">
                        <li class="important-subtext">{{user.qualification}}</li>
                        <li class="important-subtext">in </li>
                        <li class="important-subtext"><span >{{user.fieldofstudy}} | {{user.universitylocation}}</span></li>
                    </ul>
                    <ul class="no-listyle inline-listyle resume-detail-item-inner">
                        <li class="resume-detail-summary-left">Major</li>
                        <li class="resume-detail-summary-right">{{user.major}}</li>
                        <li ><div></div></li>
                        <li class="resume-detail-summary-left">Grade</li>
                        <li class="resume-detail-summary-right ">{{user.grade}}</li>
                    </ul>
                </div>

                <div class="col-xs-2 col-md-2" ng-show="editSwitch == true">
                    <span class="edit-button"><a href=""><span class="icon-edit" ng-click="editMyEducation($index, user.university, user.qualification, user.fieldofstudy);toggleEditBtn()"></span></a></span>
                </div>
            </div>
            <div class="col-xs-12 focus-edit" ng-show="eduEditFormSwitch == true" id="userEduEditor" ng-if="showEduEdit == $index">
            <div edu-form my-attribute="userEduNew" my-eduattribute="userEdu" my-addedu="addEdu()" my-toggleeditform="toggleEduEditForm()" my-toggleebtn="toggleEditBtn()" my-control="controlDirFunction"></div>
        </div>
        </div>

        
    </div>
    <!--Education Ends here-->


    <!--Skills Info-->
    <div class="col-xs-12 no-paddingleft no-paddingright resume-skills-detail" ng-init='userSkill=<% $skillJson %>'>
        <hr>

        <div class="col-xs-12 col-sm-12 col-md-12 resume-section">
            <span class="icon-math-compass x2"></span>
            <span class="skill-title">Skills</span>
            <span ng-show="editSwitch == true" id="editButtons"><a class="add-button" href="" ng-click='controlDirFunction.getUserSkill()'><span class="icon-edit"></span></a></span>
        </div>

        <div class="col-xs-12 resume-detail-item focus-edit" ng-show="skillFormSwitch == true">
            <div skill-form my-newskill="userSkillNew" my-skillattribute="userSkill" my-toggleInfo="toggleSkillInfo()" my-toggleform="toggleSkillForm()" my-addskill="addSkill()" my-clearskill="clearSkill()" my-toggleskillbtn="toggleEditBtn()" my-control="controlDirFunction"></div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 resume-detail-item" ng-show="skillInfoSwitch == true">
            <div class="col-sm-3 col-md-3 skill-label visible-sm visible-md visible-lg">
                <span>{{candidate.advanced.label}}</span>
            </div>
            <div class="col-xs-10 col-md-7">
                <div class="visible-xs content-alignment">
                    <span id="subName">{{candidate.advanced.label}}</span>
                </div>
                <div class="lbl-output-skill">
                    <ul class="no-listyle skill-list" >
                        <li ng-repeat="sAdvanced in userSkill| filter:{pro: 'Advanced'}">{{sAdvanced.name}}</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-3 col-md-3 skill-label visible-sm visible-md visible-lg">
                <span>{{candidate.intermediate.label}}</span>
            </div>
            <div class="col-xs-10 col-md-8 ">
                <div class="visible-xs content-alignment movePara">
                    <span id="subName">{{candidate.intermediate.label}}</span>
                </div>
                <div class="lbl-output-skill">
                    <ul class="no-listyle skill-list">
                        <li ng-repeat="sIntermediate in userSkill| filter:{pro: 'Intermediate'}">{{sIntermediate.name}}</li>
                    </ul>
                </div>
            </div>

            <div class="col-md-3 skill-label visible-sm visible-md visible-lg">
                <span>{{candidate.beginner.label}}</span>
            </div>
            <div class="col-xs-10 col-md-7">
                <div class="visible-xs">
                    <span id="subName">{{candidate.beginner.label}}</span>
                </div>
                <div class="lbl-output-skill">
                    <ul class="no-listyle skill-list">
                        <li ng-repeat="sBeginner in userSkill| filter:{pro: 'Beginner'}">{{sBeginner.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--Skills Ends here-->


    <!--Languages Info-->
    <div class="col-xs-12 no-paddingleft no-paddingright resume-language-detail" ng-init='userLanguage=<% $langJson %>'>
        <hr/>
        <div class="col-xs-12 col-sm-12 col-md-12 resume-section">
            <span class="icon-comments-o x2"></span>
            <span class="lang-title">{{candidate.language.tag}}</span>
            <span ng-show="editSwitch == true" id="editButtons"><a class="add-button" href="" ng-click='controlDirFunction.getUserLang();
                    toggleLangInfo()'><span class="icon-edit"></span></a></span>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 lang-reminder resume-section">
            <span>Proficiency level: 0 - Poor, 10 - Excellent</span>
        </div>

        <div class="col-xs-12 resume-detail-item focus-edit" ng-show="langFormSwitch == true">
            <div lang-form my-newlang="userLangNew" my-language="userLanguage" my-toggleform="toggleLangForm()" my-toggleinfo="toggleLangInfo()" my-togglelangbtn="toggleEditBtn()" my-addlang="addLang()" my-control="controlDirFunction" ></div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 resume-detail-item hidden-language " ng-show="langInfoSwitch == true">
            <div class="col-xs-12 col-sm-4 col-md-2">
                <ul class="no-listyle lang-label">
                    <li>Language</li>
                </ul>
                <ul class="no-listyle lang-important-detail">
                    <li ng-repeat="userLang in userLanguage| orderBy:'+spoken'">{{userLang.name}} {{userLang.primary}}</li>
                </ul>
            </div>

            <div class="col-xs-12 col-sm-2 col-md-2">
                <ul class="no-listyle lang-label-detail">
                    <li>Spoken</li>
                </ul>

                <ul class="no-listyle lang-important-detail lang-font-center">
                    <li ng-repeat="userLang in userLanguage| orderBy:'+spoken'">{{userLang.spoken}}</li>
                </ul>
            </div>

            <div class="col-xs-12 col-sm-2 col-md-2">
                <ul class="no-listyle lang-label-detail">
                    <li>Written</li>
                </ul>

                <ul class="no-listyle lang-important-detail lang-font-center">
                    <li ng-repeat="userLang in userLanguage| orderBy:'+spoken'">{{userLang.written}}</li>
                </ul>
            </div>

            <div class="col-xs-12 col-sm-4 col-md-3">
                <ul class="no-listyle lang-label-detail">
                    <li>Relevant Certificates</li>
                </ul>

                <ul class="no-listyle lang-important-detail lang-font-center">
                    <li ng-repeat="userLang in userLanguage| orderBy:'+spoken'">{{userLang.cert}}</li>
                </ul>
            </div>
        </div>

        <div class="col-xs-12 resume-detail-item visible-language" ng-show="langInfoSwitch == true">
            <div ng-repeat="userLang in userLanguage| orderBy:'+spoken'">
                <div class="col-xs-12">
                    <label class="lang-reminder lbl-lang-preview">Language</label>
                    <label>{{userLang.name}} {{userLang.primary}}</label>
                </div>

                <div class="col-xs-12">
                    <label class="lang-reminder lbl-lang-preview">Spoken</label>
                    <label>{{userLang.spoken}}</label>
                </div>

                <div class="col-xs-12">
                    <label class="lang-reminder lbl-lang-preview">Spoken</label>
                    <label>{{userLang.spoken}}</label>
                </div>

                <div class="col-xs-12">
                    <label class="lang-reminder lbl-lang-preview">Written</label>
                    <label>{{userLang.written}}</label>
                </div>

                <div class="col-xs-12 align-xs-lang">
                    <label class="lang-reminder lbl-lang-preview">Relevant Certificates</label>
                    <label>{{userLang.cert}}</label>
                </div>
            </div>
        </div>



    </div>
    <!--Languages Ends here-->

    <!--Additional Info-->
    <div class="col-xs-12 no-paddingleft no-paddingright resume-addInfo-detail" ng-init='userAboutMe=<% $aboutJson %>'>
        <hr/>
        <div class="col-xs-12 col-sm-12 col-md-12 resume-section">
            <span class="icon-menu x2"></span>
            <span class="aInfo-title">{{candidate.addinformation.tag}}</span>
            <span ng-show="editSwitch == true" id="editButtons"><a class="add-button" href="" ng-click='controlDirFunction.getUserAddinfo()'><span class="icon-edit"></span></a></span>
        </div>

        <div class="col-xs-12 focus-edit" ng-show="addInfoFormSwitch == true"  id="aInfo-section">
            <div addinfo-form my-addinfoattribute="userAdditionalInfo" my-newattribute="userNewAddinfo" my-addinfo="addAddinfo()" my-toggleform="toggleAddinfoForm()" my-toggleInfo="toggleAddInfo()" my-toggleinfobtn="toggleEditBtn()" my-control="controlDirFunction"></div>
        </div>


        <div ng-repeat="user in userAdditionalInfo">
            <div class="col-xs-12 col-sm-12 col-md-12 resume-detail-item"  ng-hide="addInfoSwitch == false">
                <div class="col-md-3 aInfo-label margin-btm visible-sm visible-md visible-lg">
                    <span>{{candidate.salary.label}}</span>
                </div>
                <div class="col-xs-12 col-md-7 margin-btm">
                    <span class="visible-xs" id="subName">{{candidate.salary.label}}</span>
                    <span class="aInfo-detail">{{user.expectedCurrency}} {{user.expectedSalary}}<//span>
                </div>

                <div class="col-md-3 aInfo-label margin-btm visible-sm visible-md visible-lg">
                    <span>{{candidate.workLocation.label}}</span>
                </div>
                <div class="col-xs-12 col-md-8 margin-btm">
                    <span class="visible-xs" id="subName">{{candidate.workLocation.label}}</span>
                    <span class="aInfo-detail">{{user.preferredWorkLocationOne}}, {{user.preferredWorkLocationTwo}}, {{user.preferredWorkLocationThree}}</span>
                </div>


                <div class="col-xs-12 col-sm-3 col-md-3 aInfo-label margin-btm visible-sm visible-md visible-lg">
                    <span>{{candidate.otherinformation.label}}</span>
                </div>

                <div class="col-xs-12 col-sm-8 col-md-8 margin-btm">
                    <span class="visible-xs" id="subName">{{candidate.otherinformation.label}}</span>
                    <div class="aInfo-detail" ng-bind-html="getHtml(user.otherInformation)">
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!--Additional Information Ends here-->


    <!--About Me Info-->
    <div class="col-xs-12 no-paddingleft no-paddingright resume-aboutme-detail">
        <hr>
        <div class="col-xs-12 col-sm-12 col-md-12 resume-section">
            <span class="icon-user x2"></span>
            <span class="about-title">{{candidate.about.tag}}</span>
            <span ng-show="editSwitch == true" id="editButtons"><a class="add-button" href="" ng-click='controlDirFunction.getUserAboutme();
                    toggleAboutmeInfo()'><span class="icon-edit"></span></a></span>
        </div>

        <div class="col-xs-12 focus-edit" ng-show="aboutmeFormSwitch == true">
            <div aboutme-form my-aboutmeattribute="userAboutMe"  my-newattribute="userNewAboutme" my-add="addAboutme()" my-toggleinfo="toggleAboutmeInfo()" my-toggleform="toggleAboutmeForm()" my-togglebtn="toggleEditBtn()" my-control="controlDirFunction" ></div>
        </div>


        <div ng-repeat="user in userAboutMe" >
            <div class="col-xs-12 col-sm-12 col-md-12 resume-detail-item" ng-show="aboutmeInfoSwitch == true">
                <div class="col-md-3 aInfo-label margin-btm visible-sm visible-md visible-lg">
                    <span>{{candidate.gender.label}}</span>
                </div>
                <div class="col-xs-12 col-md-7 margin-btm">
                    <span class="visible-xs" id="subName">{{candidate.gender.label}}</span>
                    <span class="aInfo-detail">{{user.gender}}<//span>
                </div>
                <div class="col-md-3 aInfo-label visible-sm visible-md visible-lg">
                    <span>{{candidate.about.label}}</span>
                </div>

                <div class="col-xs-12 col-md-8 margin-btm">
                    <span class="visible-xs" id="subName">{{candidate.about.label}}</span>
                    <span class="aInfo-detail">{{user.mobileCode}}{{user.mobile}}</span>
                </div>

                <div class="col-md-3 aInfo-label visible-sm visible-md visible-lg">
                    <span>{{candidate.mylocation.label}}</span>
                </div>

                <div class="col-xs-12 col-md-8 margin-btm">
                    <span class="visible-xs" id="subName">{{candidate.gender.label}}</span>
                    <span class="aInfo-detail">{{user.state}}, {{user.country}}</span>
                </div>
            </div>
        </div>

        <div><br/></div>

    </div>
    <!--About Me Ends here>	-->


    <!--Container Grid End Here-->

</div>

<div><br/></div>
<div><br/></div>

@stop