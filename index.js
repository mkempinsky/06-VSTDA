

var todoApp = angular.module('todoApp', []);

	

todoApp.controller('todoCtrl', function ($scope, $http){

	//$http.get('todoList.json').success(function(data){

		$scope.tasks= [];
		$scope.task= {};
		
	// total tasks in list
		$scope.getTotalTasks= function(){
				return $scope.tasks.length;
			};

	// create a new task function
		$scope.addTask = function(){

			// alert user if task name is not entered
			if ($scope.task.inputTaskText === undefined){
				swal('Please enter a name for your new task.');
				return; 
			} 

			if ($scope.task.taskPriority === undefined){
				alert('Please select a priority for your new task.');
				return;
			}


			// add new task to array
			$scope.tasks.push({
				name: $scope.task.inputTaskText, 
				notes: $scope.task.inputNoteText, 
				priority: parseInt($scope.task.taskPriority)


			});

			$scope.task={};
		};

	// delete task function	
		$scope.deleteTask = function(task){
			// $scope.tasks.splice(start, count);

			// create a new variable to find the index of a specific task
			var indexOfTask = $scope.tasks.indexOf(task);

			// use splice to delete the task
			$scope.tasks.splice(indexOfTask, 1);

		};
		



	//});

	

});