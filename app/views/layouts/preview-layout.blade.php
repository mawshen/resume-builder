<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>Resume - import from Linked In</title>
        <!-- Pi Library -->
        <link href="http://dna.jsstatic.com/pi/1.0.6/pi.css" rel="stylesheet">

        <!-- Icon Font CDN -->
        <link href="http://dna.jsstatic.com/pi/icon-font/1.0/icon-font.css" rel="stylesheet">

        <link href="css/newResumeStyle_temp.css" rel="stylesheet">

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->

    </head>
    
	<body ng-controller="PreviewController">
	
        <div class="navbar navbar-default navbar-static ">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#top-nav">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>

                <div class="navbar-collapse collapse" id="top-nav">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">MyJobStreet <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-header">My Resume</li>
                                <li><a href="#">Preview Resume</a></li>
                                <li><a href="#">Edit Resume</a></li>
                                <li><a href="#">Privacy Setting</a></li>
                                <li><a href="#">Uploaded Resume</a></li>
                                <li class="divider"></li>
                                <li class="dropdown-header">My Applications</li>
                                <li><a href="#">Online Applications</a></li>
                                <li><a href="#">Interview Requests</a></li>
                                <li><a href="#">Resume Requests</a></li>
                                <li class="divider"></li>
                                <li class="dropdown-header">Career Enhancers</li>
                                <li><a href="#">Priority Application</a></li>
                                <li><a href="#">Salary Report</a></li>
                                <li><a href="#">English Assessment</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Learning <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">View Course</a></li>
                                <li><a href="#">Edit Learning Profile</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Jobs <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Browse Jobs</a></li>
                                <li class="divider"></li>						
                                <li><a href="#">Fresh Grad Jobs</a></li>
                                <li><a href="#">Oversea Jobs</a></li>
                                <li><a href="#">Volunteering Jobs</a></li>
                                <li><a href="#">Classified Jobs</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="../navbar/">Employer: Post Ad</a></li>				
                    </ul>
                </div>
            </div>
        </div>

        <div id="js-header" class="search-bar">
            <div class="container">
                <div class="col-sm-3">
                    <div class="logo"></div>
                </div>
                <div class="col-sm-6 visible-md visible-lg default-tpl">
                    <div class="input-group" style="margin-top:10px;">
                        <input type="text" placeholder="Search Jobs By Title, Skills or Keywords ..." class="form-control">
                        <span class="input-group-btn"><a type="button" class="btn btn-default">Search</a></span>
                    </div>
                </div>
                <div class="col-sm-3 visible-md visible-lg">
                    <div class="login-pane"></div>		
                </div>		
            </div>
        </div>

        <!--Content Header-->
        <div class="menu" id="blurMenu" >
            <div class="container mid-top-menu" >
                <div class="col-xs-9 col-sm-6 col-md-4" id="main-r-title">
                    <span class="resume-title">My Resume</span>
                </div>

                <div class="main-edit-btn-align" >
                    <div class="input-group-btn main-edit-btn" ng-show="doneSwitch == false">
                        <button type="button" class="btn btn-primary" ng-click="toggleEditBtn();
                                toggleMenu()">Edit</button>
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            <i class="caret"></i>
                        </button>
                        <ul class="dropdown-menu pull-right">
                            <li><a href="javascript:;">Download</a></li>
                            <li><a href="javascript:;">Print</a></li>
                            <li><a href="javascript:;">Opportunities</a></li>
                        </ul>
                    </div>

                    <div class="input-group-btn main-done-edit-btn" ng-show="doneSwitch == true">
                        <button type="button" class="btn btn-success" ng-click="toggleEditBtn();
                                toggleMenu();
                                cancelAllEditor()">Done Editing</button>
                    </div>
                </div>
            </div>
        </div>

        @yield('content')
		<div ng-view>
        </div>

        <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/libs/jquery-2.1.1.min.js"></script>
        <script async src="js/bootstrap.min.js"></script>
        <script async src="js/select2.min.js" type="text/javascript" ></script>

        <!--My RequireJS-->   
        <script src="js/require.js" data-main="js/appBootstrap.js"></script>

    </body>
	
	
</html>