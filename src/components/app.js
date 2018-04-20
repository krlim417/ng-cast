angular.module('video-player')

  .controller('AppCtrl', function() {
    this.videos = window.exampleVideoData;
  })
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
  });