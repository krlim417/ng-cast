angular.module('video-player')

  .controller('AppCtrl', function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
  })
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
  });