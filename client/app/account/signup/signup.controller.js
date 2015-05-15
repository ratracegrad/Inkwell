'use strict';

angular.module('familyThiefApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, HelpRequest) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          username: $scope.user.username,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to user's dashboard
          var localRequest = Auth.getLocalRequest();

          if(localRequest){
            HelpRequest.save({
              title: localRequest.title,
              text: localRequest.text,
              summary: localRequest.summary
            }, function(helpRequest){
              // Auth.getCurrentUser().helpRequests.push(helpRequest);
              $location.path('/dashboard');
            });
          } else {
            $location.path('/dashboard');
          }
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

  });
