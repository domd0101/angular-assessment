var assApp = angular.module('assApp',['ui.router'])
// Setup your routes and states in your app.js file.
// Setup the routes for the home.html, about.html, blog.html, and shop.html.
// Setup the ui-view and ensure that the home.html loads first.

assApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('','/home');
    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: 'views/home.html',
      })
      .state('about',{
        url: '/about',
        templateUrl: 'views/about.html',
      })
      .state('blog',{
        url: '/blog',
        templateUrl: 'views/blog.html',
      })
      .state('shop',{
        url: '/shop',
        templateUrl: 'views/shop.html',
        controller: 'shopCtrl'
      })
      .state('details',{
          url:'/details/:id',
          templateUrl: 'views/product-details.html',
          controller: 'productDetailsCtrl'
        })


}])
