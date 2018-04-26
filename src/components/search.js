angular.module('video-player')

  .controller('SearchController', function() {
    this.handleClick = (query) => {
      this.service.search(this.input, (data) => {
        this.result(data);
      });
    };
  })
  .component('search', {
    bindings: {
      result: '<',
      service: '<'
    },
    controller: 'SearchController',
    templateUrl: 'src/templates/search.html' 
  });
