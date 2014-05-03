var AppView = Backbone.View.extend({

  initialize: function(){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.currentSongView = new CurrentSongView({model: this.model.get('currentSong')});
    this.songsQueueView = new SongsQueueView({collection: this.model.get('songsQueue')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    this.render();
  },

  render: function(){
    this.$el.append('<h1>BBPlayer</h1>')
    this.$el.append(this.playerView.$el);
    this.$el.append(this.currentSongView.$el);
    this.$el.append(this.songsQueueView.$el);
    this.$el.append(this.libraryView.$el);
  }
});
