'use strict';

angular.module('familyThiefApp')
  .controller('HelpRequestCtrl', function ($scope, $http, Auth, HelpRequest, $location) {
    $scope.currentUser = Auth.getCurrentUser();
    $scope.helpRequest = {};
    $scope.newContribution = {};
    $scope.helpRequest.id = Auth.getHelpRequest();
    $scope.hasVoted = false;
    $scope.contributionSuccess = false;
  

    // grabs the appropriate helpRequest data based on property stored in Auth service
    $scope.getHelpRequestData = function() {
      HelpRequest.get({id: $scope.helpRequest.id}, function(helpRequest) {
        $scope.helpRequest = helpRequest;
        // check if current user is owner of this help request and display it differently if so
        if($scope.currentUser.username === $scope.helpRequest.username) {
          $scope.isOwner = true;
        } else {
          $scope.isOwner = false;
        }
      });
    }

    $scope.getHelpRequestData();

    $scope.respondToHelpRequest = function() {
      var contribText = $scope.newContribution.text;
      $http.post('/api/contributions', {
        helperUsername: $scope.currentUser.username,
        helpedId: Auth.getHelpRequest(),  // returns the id of the currently viewed help request
        text: $scope.newContribution.text
      })
      .success(function(data, status) {
        // make this new data display in this view
        $scope.helpRequest.contributions.push({
          helperUsername: $scope.currentUser.username, // username of contributor
          id: data.id,
          textSnippet: contribText,
          username: $scope.helpRequest.username, // owner of help request
          origDate: data.origDate
        });
        $scope.currentUser.contributions.push({
          id: data.id,
          textSnippet: contribText,
          helperUsername: $scope.currentUser.username,
          origDate: data.origDate
        });
        $scope.contributionSuccess = true;
      })
    };

    $scope.loadContribution = function(id) {
      Auth.setContribution(id);  // sets the id of the contribution that the user is about to view
      $location.path('/contribution');
    };

    $scope.upvote = function() {
      $scope.hasVotedYet();


      if(!$scope.hasVoted) {
        $http.post("api/helpRequests/votes", {
          helpRequestId: Auth.getHelpRequest(),
          upvoter: $scope.currentUser.username
        })
        .success(function(data, status) {
          $scope.currentUser.votes += 1;
          $scope.helpRequest.votes += 1;
        });
      } else {
        alert('You have already voted!');
      }
    }

    $scope.hasVotedYet = function() {

      $http.post('api/helpRequests/hasVoted', {
        helpRequestId: Auth.getHelpRequest(),
        upvoter: $scope.currentUser.username
      })
      .success(function(data, status) {
        $scope.hasVoted = data;
      });
    }
    

  });
 