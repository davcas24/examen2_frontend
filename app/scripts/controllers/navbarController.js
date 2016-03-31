angular.module('AngularScaffold.Controllers')
  .controller('NavbarController', ['AuthService', '$scope', '$rootScope', '$sessionStorage','$state',  function (authService, $scope, $rootScope, $sessionStorage,$state) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      //$scope.Mod = {text: ""};
      //$scope.Add = {text: ""};

      $scope.goRegister = function(){
        $state.go('registerpage');
      }

      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }


      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;

          $scope.user = {};
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

  }]);
