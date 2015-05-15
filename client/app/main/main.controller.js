'use strict';

angular.module('familyThiefApp')
  .controller('MainCtrl', function ($scope, $http, $controller, $window, $state, HelpRequest, Auth) {
    $scope.helpRequest = {};
    $scope.helpRequest.text = "### Replace this with your beautiful writing.";
    $scope.currentUser = Auth.getCurrentUser();


    $scope.submitHelpRequest = function(isValid) {
      if(isValid) {

        if(Auth.isLoggedIn()){
          HelpRequest.save({
            title: $scope.helpRequest.title,
            text: $scope.helpRequest.text,
            summary: $scope.helpRequest.summary
          }, function(helpRequest){

            $scope.submissionError = false;
            $scope.submissionSuccess = true;
            // save help request submission in user's current session
            // $scope.currentUser.helpRequests.push(helpRequest);
            $state.go('dashboard');
          });
        } else {  
          Auth.saveLocalRequest($scope.helpRequest);
          $state.go('signup');
        }

      } else {
        $scope.submissionError = true;
      }
    }

  });
