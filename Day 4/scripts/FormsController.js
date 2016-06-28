/**
 * Created by user on 6/28/2016.
 */
hrApp.controller('FormsController',['$scope',function ($scope){

$scope.submit = function () {
    console.log($scope.myForm);
    console.log("...")
    if($scope.myForm.$valid){
        alert("Valid");
    }

}



}]);