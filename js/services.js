
angular.module('TechChat.services',[]).factory('Message',function($resource){
    return $resource('http://localhost:8080/api/messages/:id',{id:'@_id'},{
	get: { method: 'GET', isArray:true },
        update: { method: 'PUT', isArray:true },
	save: { method: 'POST', isArray:true }
    });
}).service('popupService',function($window){
    this.showPopup=function(msg){
        return $window.confirm(msg);
    }
});
