require.config({

	waitSeconds: 0,
	baseUrl: 'js/',

	paths: {
		'angular': ['//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min'],
        'angularRoute': ['angular-route.min'],
		'ui-select2': ['ui-select2']
	},

	shim: {
		'angular': {
			exports: 'angular'
		},
		'appModule': {
			deps: ['angular'],
			exports: 'appModule'
		},
		'angularRoute': {
			deps: ['angular'],
			exports: 'angularRoute'
		},
		'ui-select2': {
			deps: ['angular'],
			exports: 'ui-select2'
		}		
	}

});

require(['angular', 'angularRoute', 'Controller/PreviewController', 'Services/expDirective', 'Services/eduDirective', 'Services/skillDirective', 'Services/langDirective', 'Services/addinfoDirective', 'Services/aboutmeDirective', 'ui-select2'], function(){

	// Application has boostrapped and started
	angular.bootstrap(document.getElementsByTagName("body")[0], ['newResumeApp']);
});	