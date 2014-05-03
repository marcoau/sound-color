var PlaylistsView = Backbone.View.extend({

  className: 'playlists',

  initialize: function(){
    this.render();
    this.collection.on('add', function(playlistModel){
      this.$el.append(new PlaylistsEntryView({model: playlistModel}).$el);
    }, this);
  },

  render: function(){
    this.$el.append('<h3>Playlists</h3>');
    this.collection.each(function(playlistModel){
      this.$el.append((new PlaylistsEntryView({model: playlistModel})).$el);
    }, this);
  }
});
