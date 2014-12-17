define([], function() {
    var app = angular.module('newResumeApp', ['ngRoute','ui.select2']);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                    when('/preview', {
                        templateUrl: '/newresume/app/views/resume/preview.html',
                        controller: 'PreviewController'
                    }).
                    when('/download', {
                        templateUrl: ''
                                //controller: ''
                    }).
                    when('/print', {
                        templateUrl: ''
                                //controller: ''
                    }).
                    when('/opportunities', {
                        templateUrl: ''
                                //controller: ''
                    });
					/*.
                    otherwise({
                        redirectTo: '/'
                        //controller: 'PreviewController'
                    });*/
        }]);

    app.run([function() {
            

            /**
             * @description:
             * Run everytime the angular.app start, the menu will stick to top.
             */
            angular.element(document).ready(function() {
                var menu = $('.menu');
                var origOffsetY = menu.offset().top;

                function scroll() {
                    if ($(window).scrollTop() >= origOffsetY) {
                        $('.menu').addClass('sticky');
                    } else {
                        $('.menu').removeClass('sticky');
                    }
                }
                document.onscroll = scroll;
            });


        }]);

    return app;

});
