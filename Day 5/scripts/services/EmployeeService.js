hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactoryBackup.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            } , findAlllEmployees:function(){
                
                return $http({url: CommonResourcesFactoryBackup.findAllEmployeesUrl , method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return data;
                    });

            }, findAllJobs:function() {
                 return $http({url: CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
                    .success(function (data, status, headers, config){
                        return data;
                    });
            }, findAllDepartments: function () {
                return $http({url: CommonResourcesFactoryBackup.findAllDepartmentsUrl, method: 'GET'})
                    .success(function (data, status, headers, config) {
                        return  data;
                    });

            }

            
        }
    }]
);