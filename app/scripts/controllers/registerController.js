angular.module('AngularScaffold.Controllers')
  .controller('registerController', ['registerService', '$scope', '$rootScope', '$sessionStorage','$state',  function (registerService, $scope, $rootScope, $sessionStorage,$state) {
      $scope.user = {};

      function clear(){
        $("#texto").val("");
        $("#texto1").val("");
        $("#texto3").val("");
        $("#texto2").val("");
      }

      $scope.register = function(){
        var user = {username: $scope.user.username, password:  $scope.user.password,
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
