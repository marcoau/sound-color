var LibraryEntryView = Backbone.View.extend({

  template: _.template('<div class="libraryEntry"><span><%= title %> by <%= artist %></span>' + 
    '<button class="addToQueue">Queue</button><button class="addToPlaylist">Playlist</button>'),

  events: {
    'click': function(){
      this.model.enqueue();
    }
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
