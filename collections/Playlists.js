var Playlists = Backbone.Collection.extend({
  model: PlaylistModel,

  initialize: function(){
    this.on('removeFromPlaylist', function(playlist){
      this.remove(playlist);
    }, this);
  },

});
