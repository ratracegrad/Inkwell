describe('AllHelpRequestCtrl', function() {
  var $scope, $http, Auth, HelpRequest;

  beforeEach(module('familyThiefApp'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $location = $injector.get('$location');
    $http = $injector.get('$http');
    Auth = $injector.get('Auth');
    HelpRequest = $injector.get('HelpRequest');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    // used to create our AllHelpRequestCtrl for testing
    createController = function () {
      return $controller('AllHelpRequestCtrl', {
        $scope: $scope,
        $http: $http,
        Auth: Auth,
        HelpRequest: HelpRequest
      });
    };

    createController();
  }));

  it('should have a search method', function() {
    expect($scope.search).to.be.a('function');
  });

  it('should have a search method', function() {
    expect($scope.loadHelpRequest).to.be.a('function');
  });
  
  it('should have a getRecentlySubmitted method', function() {
    expect($scope.getRecentlySubmitted).to.be.a('function');
  });

});