angular.module('AngularScaffold.Controllers')
  .controller('joblistController', ['$scope', 'joblistService', '$sessionStorage', function ($scope, joblistService, $sessionStorage) {
    $scope.joblist_inicial = [];
    $scope.joblist_fin = [];
    $scope.job = {};

    window.onload = getList();

    function invertlist(){
      for (var i = $scope.joblist_inicial - 1; i >= 0; i--) {
        $scope.joblist_fin.push($scope.joblist_inicial[i]);
      }
    }

    function getList(){
      joblistService.Gettrabajos().then(function(response){
        $scope.joblist_inicial = response.data;
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message)
      });
      invertlist();
    }

  }]);
