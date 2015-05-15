describe('NavbarCtrl', function() {
  var $scope, $location, Auth;

  beforeEach(module('familyThiefApp'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $location = $injector.get('$location');
    // $httpBackend = $injector.get('$httpBackend');
    Auth = $injector.get('Auth');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    // used to create our NavbarCtrl for testing
    createController = function () {
      return $controller('NavbarCtrl', {
        $scope: $scope,
        $location: $location,
        Auth: Auth
      });
    };

    createController();
  }));

  it('should have a logout method', function() {
    expect($scope.logout).to.be.a('function');
  });

  it('should have an is collapsed value of true', function () {
    expect($scope.isCollapsed).to.equal(true);
  });

  it('should have a isActive method', function() {
    expect($scope.isActive).to.be.a('function');
  });

});