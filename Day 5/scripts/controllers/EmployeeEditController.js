hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.departments=[];
        $scope.managers=[];
        $scope.jobs=[];
        $scope.employee=[];

        $http({url:CommonResourcesFactoryBackup.findOneEmployeeUrl +
        $routeParams.employeeId, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.employee = data;
            });
        $http({url:CommonResourcesFactoryBackup.findAllDepartmentsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.departments = data;
            });

        $http({url:CommonResourcesFactoryBackup.findAllEmployeesUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.managers = data;
            });
        $http({url:CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        /**
         * Reset form
         */
        $scope.deleteEmploye=function (employeeId) {
            $http({url: CommonResourcesFactoryBackup.deleteEmployeeUrl+ "/" +employeeId , method: 'DELETE'})
                .success(function (data) {
                   alert('Employee deleted')
                });
        };
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: commonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);