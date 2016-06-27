hrApp.controller('EmployeeListController', ['$scope','commonResourcesFactoryBackup', '$http', '$location',
    function ($scope,$commonResourcesFactoryBackup, $http, $location) {

// TODO #HR2 - inject commonResourcesFactory
        $http.get($commonResourcesFactoryBackup.findAllEmployeesUrl )
            .success(function(data, status, headers, config) {
                $scope.employees = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

         // Employee list


        //TODO #HR3 Load employee list from server using commonResourcesFactory



        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };


    }]);