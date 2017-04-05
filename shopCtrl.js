assApp.controller('shopCtrl',['$scope','shopService','$stateParams',function($scope,shopService,$stateParams){

  $scope.getItems = function(){
    console.log('work');
    var promise = shopService.getItems();
        return promise.then(function(results){
        $scope.shopData = results.data;
        console.log('First: ',$scope.shopData);
      })
  }
  $scope.getItems();


}])
