angular.module("ui.select2",[]).value("uiSelect2Config",{}).directive("uiSelect2",["uiSelect2Config","$timeout",function(c,b){var a={};if(c){angular.extend(a,c)}return{require:"ngModel",priority:1,compile:function(j,e){var i,d,g,h=j.is("select"),f=angular.isDefined(e.multiple);if(j.is("select")){d=j.find("optgroup[ng-repeat], optgroup[data-ng-repeat], option[ng-repeat], option[data-ng-repeat]");if(d.length){g=d.attr("ng-repeat")||d.attr("data-ng-repeat");i=jQuery.trim(g.split("|")[0]).split(" ").pop()}}return function(p,r,n,m){var q=angular.extend({},a,p.$eval(n.uiSelect2));var l=function(t){var s;if(q.simple_tags){s=[];angular.forEach(t,function(v,u){s.push(v.id)})}else{s=t}return s};var o=function(t){var s=[];if(!t){return s}if(q.simple_tags){s=[];angular.forEach(t,function(v,u){s.push({id:v,text:v})})}else{s=t}return s};if(h){delete q.multiple;delete q.initSelection}else{if(f){q.multiple=true}}if(m){p.$watch(e.ngModel,function(t,s){if(!t){return}if(t===s){return}m.$render()},true);m.$render=function(){if(h){r.select2("val",m.$viewValue)}else{if(q.multiple){var s=m.$viewValue;if(angular.isString(s)){s=s.split(",")}r.select2("data",o(s))}else{if(angular.isObject(m.$viewValue)){r.select2("data",m.$viewValue)}else{if(!m.$viewValue){r.select2("data",null)}else{r.select2("val",m.$viewValue)}}}}};if(i){p.$watch(i,function(t,s,u){if(angular.equals(t,s)){return}b(function(){r.select2("val",m.$viewValue);r.trigger("change");if(t&&!s&&m.$setPristine){m.$setPristine(true)}})})}m.$parsers.push(function(s){var t=r.prev();t.toggleClass("ng-invalid",!m.$valid).toggleClass("ng-valid",m.$valid).toggleClass("ng-invalid-required",!m.$valid).toggleClass("ng-valid-required",m.$valid).toggleClass("ng-dirty",m.$dirty).toggleClass("ng-pristine",m.$pristine);return s});if(!h){r.bind("change",function(s){s.stopImmediatePropagation();if(p.$$phase||p.$root.$$phase){return}p.$apply(function(){m.$setViewValue(l(r.select2("data")))})});if(q.initSelection){var k=q.initSelection;q.initSelection=function(s,t){k(s,function(v){var u=m.$pristine;m.$setViewValue(l(v));t(v);if(u){m.$setPristine()}r.prev().toggleClass("ng-pristine",m.$pristine)})}}}}r.bind("$destroy",function(){r.select2("destroy")});n.$observe("disabled",function(s){r.select2("enable",!s)});n.$observe("readonly",function(s){r.select2("readonly",!!s)});if(n.ngMultiple){p.$watch(n.ngMultiple,function(s){n.$set("multiple",!!s);r.select2(q)})}b(function(){r.select2(q);r.select2("data",m.$modelValue);m.$render();if(!q.initSelection&&!h){var s=m.$pristine;m.$setViewValue(l(r.select2("data")));if(s){m.$setPristine()}r.prev().toggleClass("ng-pristine",m.$pristine)}})}}}}]);