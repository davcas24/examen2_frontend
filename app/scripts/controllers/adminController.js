angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', '$sessionStorage', function ($scope, HomeService, $sessionStorage) {
    $scope.trabajo = {};

    $scope.create = function(){
      var work = {username: $scope.user.username, password:  $scope.user.password,
        nombre : $scope.user.nombre, correo : $scope.user.correo,
        aplicados : [], scope: ['admin']};
        console.log(user);
      registerService.Register(user).then(function(response){
        alert('Registered in correctly!');
      }).catch(function(err){
        console.log(err);
        alert(err.data.error + " " + err.data.message);
      })
      clear();
      $state.go('home');
    }

  }]);
