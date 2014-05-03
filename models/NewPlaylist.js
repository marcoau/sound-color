var NewPlaylist = Backbone.Collection.extend({

  model: Song,

  initialize: function(){
    this.on('removeFromPlaylist', function(song){
      this.remove(song);
    }, this);
  },

  addPlaylist: function(name){
    this.trigger('addPlaylist', name, this);
  }

});
