angular.module('AngularScaffold.Services').factory('joblistService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = "http://David:8000/";
		return {
				Gettrabajos: function(){
					return $http.get(baseUrl + "v1/trabajos");
				}
	    };
}]);
