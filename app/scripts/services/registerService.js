angular.module('AngularScaffold.Services').factory('registerService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = "http://David:8000/";
		return {
        Register: function(payload){
          return $http.post(baseUrl + "v1/register", payload);
        }
	    };
}]);
