
angular.module('TechChat',['ui.router','ngResource','TechChat.controllers','TechChat.services']);

angular.module('TechChat').config(function($stateProvider,$httpProvider){
    $stateProvider.state('getMessages',{
        url:'/messages',
        templateUrl:'partials/messages.html',
        controller:'MessageListController'
    }).state('viewMessage',{
       url:'/messages/:id',
       templateUrl:'partials/message-view.html',
       controller:'MessageViewController'
    }).state('newMessage',{
        url:'/messages',
        templateUrl:'partials/message-add.html',
        controller:'MessageCreateController'
    }).state('editMessage',{
        url:'/messages/:id',
        templateUrl:'partials/message-edit.html',
        controller:'MessageEditController'
    });
}).run(function($state){
   $state.go('getMessages');
});
