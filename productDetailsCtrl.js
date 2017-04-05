assApp.controller('productDetailsCtrl',['$scope','shopService','$stateParams',function($scope,shopService,$stateParams){

  $scope.test = 'test';

  $scope.getById = function(id){
    $stateParams.id = id;
    console.log(id);
    var promise = shopService.getItems2(id);
          return promise.then(function(results){
        $scope.shop = results.data;
      console.log('Second: ',$scope.shop);
      })
  }
  //
  // $scope.shop = shopService.findItemById($stateParams.id);

    $scope.work = function(id){
      console.log(id);
    }




}])
