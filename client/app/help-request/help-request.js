'use strict';

//add help-request state to the app

angular.module('familyThiefApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help-request', {
        url: '/help-request',
        templateUrl: 'app/help-request/help-request.html',
        controller: 'HelpRequestCtrl', 
        authenticate: false
      });
  });