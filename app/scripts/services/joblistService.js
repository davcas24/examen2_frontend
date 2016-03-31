angular.module('AngularScaffold.Services').factory('joblistService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = "https://david-castro-backend.herokuapp.com/";
		return {
				Gettrabajos: function(){
					return $http.get(baseUrl + "v1/trabajos");
				}
	    };
}]);
