'use strict';

angular.module('familyThiefApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allHelpRequest', {
        url: '/allHelpRequest',
        templateUrl: 'app/allHelpRequest/allHelpRequest.html',
        controller: 'AllHelpRequestCtrl'
      });
  });