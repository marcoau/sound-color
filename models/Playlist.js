var Playlist = Backbone.Model.extend({
  initialize: function(songs){
    this.set({songsList: songs});
  }
});
