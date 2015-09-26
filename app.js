var app = angular.module("ourModule", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/", {
			controller: "ourModuleCtrl1",
			templateUrl: "view1.html"
		})
		.when("/view2", {
			controller: "ourModuleCtrl2",
			templateUrl: "view2.html"	
		})
		.otherwise({redirectTo:"/"});
});

app.controller("ourModuleCtrl1", function(){
	console.log("Dog view");
});

app.controller("ourModuleCtrl2", function(){
	console.log("Cat view");
});