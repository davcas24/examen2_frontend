angular.module('AngularScaffold.Services').factory('registerService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = "https://david-castro-backend.herokuapp.com/";
		return {
        Register: function(payload){
          return $http.post(baseUrl + "v1/register", payload);
        }
	    };
}]);
