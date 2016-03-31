ngular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'modificarService', '$sessionStorage', function ($scope, modificarService, $sessionStorage) {

      //$scope.exampleObject = {text: "Hola, Mundo"}
      $scope.Books = [];
      $scope.student = {};

      $scope.putBooks = function(){
        HomeService.GetBooks().then(function(response){
          $scope.Books = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postBooks = function(){
        HomeService.PostBooks($scope.student).then(function(response){
          //alert("Posted to /Books");
          $scope.getBooks();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
        //return true;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
