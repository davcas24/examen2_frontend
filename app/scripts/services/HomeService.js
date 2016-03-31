angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = "http://David:8000/";
		return {
				GetBooks: function(){
					return $http.get(baseUrl + "v1/books");
				},
				PostBooks: function(payload){
					return $http.post(baseUrl + "v1/book", payload);
				}
	    };
}]);
