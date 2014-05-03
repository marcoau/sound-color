var PlaylistModel = Backbone.Model.extend({
  initialize: function(name, songs){
    this.set({name: name});
    this.set({songsList: songs});
  },

  playPlaylist: function(){
    this.trigger('playPlaylist', this);
  },

  removeFromPlaylists: function(){
    this.trigger('removeFromPlaylists', this);
  }
});
