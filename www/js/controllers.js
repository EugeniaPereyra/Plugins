angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaVibration, $cordovaNativeAudio, $cordovaFlashlight, $ionicPlatform) {

  // Vibrate 100ms
  $scope.Vibrar=function(){
    try
    {
      $cordovaVibration.vibrate(10000);
    }
    catch(e)
    {
      console.log(e);
      //throw e;
    }
  }

  $scope.Parar=function(){
    try
    {
      $cordovaVibration.vibrate(0);
    }
    catch(e)
    {
      console.log(e);
      //throw e;
    }
  }


  $scope.Encender=function(){
  $cordovaFlashlight.available().then(function(availability) {
        var avail = availability; // is available
      }, function () {
        // unavailable
      });
    $cordovaFlashlight.switchOn()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });
  }

  $scope.Apagar=function(){
      $cordovaFlashlight.toggle()
        .then(function (success) { /* success */ },
          function (error) { /* error */ });
  }




  $scope.EscucharUno = function () {
    // var sonido=new Audio('audio/laser1.mp3');
    // sonido.play();
    $ionicPlatform.ready(function() {
      $cordovaNativeAudio.preloadSimple('uno', 'audio/laser1.mp3')
              .then(function(msg) { console.log(msg); })
             .catch(function(error) { console.error(error); });
           });
    
    $cordovaNativeAudio.play('uno')
            .then(function(msg) { console.log(msg); })
             .catch(function(error) { console.error(error); });
  }

  $scope.EscucharDos = function () {
    // var sonido=new Audio('audio/tono2.mp3');
    // sonido.play();
  $ionicPlatform.ready(function() {
    $cordovaNativeAudio.preloadSimple('dos', 'audio/tono2.mp3')
              .then(function(msg) { console.log(msg); })
             .catch(function(error) { console.error(error); });
  });
    $cordovaNativeAudio.play('dos')
            .then(function(msg) { console.log(msg); })
             .catch(function(error) { console.error(error); });
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
