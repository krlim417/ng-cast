angular.module('video-player')

  .controller('AppCtrl', function(youTube) {
    this.searchService = youTube;
    this.searchResults = (data) => {
      this.videos = data;
      this.currentVideo = data[0];
    };
    this.selectVideo = (clickedVideo) => {
      this.currentVideo = clickedVideo;
    };

    youTube.search('The Duck Song', this.searchResults);
  })
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
  });