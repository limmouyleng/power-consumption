angular.module('app', ['ionic', 'ionic.closePopup', 'app.controllers', 'app.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeCtrl',
      cache: false,
      templateUrl: 'templates/home.html'
    })

    .state('extraElements', {
      url: '/extraElements',
      controller: 'ExtraElementsCtrl',
      templateUrl: 'templates/extra-elements.html'
    })

    .state('customElements', {
      url: '/customElements',
      controller: 'CustomElementsCtrl',
      templateUrl: 'templates/custom-elements.html'
    })

  $urlRouterProvider.otherwise('/home');
});
