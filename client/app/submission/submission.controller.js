'use strict';

angular.module('familyThiefApp')
  .controller('SubmissionCtrl', function ($scope, $http, Auth, HelpRequest) {
    $scope.currentUser = Auth.getCurrentUser();

    $scope.helpRequest = {};
    $scope.helpRequest.text = "### Replace this with your beautiful writing.";
    $scope.submissionSuccess = false;
    $scope.submissionError = false;



    $scope.submitHelpRequest = function(isValid) {
      if(isValid) {
        HelpRequest.save({
          title: $scope.helpRequest.title,
          text: $scope.helpRequest.text,
          summary: $scope.helpRequest.summary
        }, function(helpRequest){
          $scope.submissionError = false;
          $scope.submissionSuccess = true;
          // save help request submission in user's current session
          $scope.currentUser.helpRequests.push(helpRequest);
        });
      } else {
        $scope.submissionError = true;
      }
    }


    

  });
