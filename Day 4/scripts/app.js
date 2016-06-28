var hrApp = angular.module('hrApp', ['ngRoute']);


hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/numbers', {
            redirectTo: '/math'
        }). when('/colors', {
                    templateUrl: 'colors.html',
                    controller: 'ColorsController'
    }).when('/forms', {
            templateUrl: 'form.html',
            controller: 'FormsController'
    }).



        otherwise({
            templateUrl: 'views/main.html',
            controller: 'MainController'
        });
    }]);


