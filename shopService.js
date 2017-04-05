assApp.service('shopService',['$http',function($http){

  this.getItems = function(){
    var promise = $http.get('http://practiceapi.devmounta.in/products');
        return promise.then(function(results){
        return results
      })
  }

  this.getItems2 = function(id){
    console.log('service all');
    var promise = $http.get('http://practiceapi.devmounta.in/products/'+id+'');
      return promise.then(function(results){
        return results
      })
  }
  
//   this.findItemById = function(id){
//   var match;
//   for (var i = 0; i < players.length; i++) {
//     if(players[i].id == id){
//       match = players[i]
//     }
//   }
//   return match
// }



}])
