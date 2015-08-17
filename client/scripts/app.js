var myApp = angular.module('myApp', []);

myApp.controller("TaskController", ['$scope', '$http', function($scope, $http){
    $scope.task = {};
    $scope.tasks = [];

    $scope.getData = function() {
        $http.get('/taskrouter').then(function(response) {
            $scope.task = {};
            $scope.tasks = response.data;
        });
    };

    $scope.getData();

    $scope.updateTask = function(task){
        $http.post('/taskrouter', task).then($scope.getData());
        console.log(task);
    };

    $scope.removeTask = function(taskID){
        console.log(taskID);
        //DELETE
        $http({ url: '/taskrouter/' + taskID,
            method: 'DELETE',
            data: {id: taskID},
            headers: {"Content-Type": "application/json;charset=utf-8"}
        }).then($scope.getData());
    };

    $scope.completeTask = function(taskID, taskText, taskComplete){
        $http.put('/taskrouter/' + taskID, {"text": taskText, "complete": !taskComplete})
            .success(function(response) {
                $scope.task = {};
                $scope.taskList = response.data;
            })
            .error(function(error) {
                console.log('Error: ' + error);
            });
    };

}]);