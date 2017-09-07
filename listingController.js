angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.unshift({
        code: $scope.listings.code, name: $scope.listings.name,
        coordinates: {
          latitude: $scope.listings.latitude,
          longitude: $scope.listings.longitude
        },
        address: $scope.listings.addr

      })
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);

    };
    $scope.showDetails = function(index) {
      //alert($scope.listings[index].coordinates.longitude)
      $scope.detailedInfo = $scope.listings[index];

    };
  }
]);
