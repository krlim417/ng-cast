angular.module('video-player')

  .controller('AppCtrl', function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (clickedVideo) => {
      this.currentVideo = clickedVideo;
    };
  })
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
  });