var LibraryEntryView = Backbone.View.extend({

  template: _.template('<span><%= title %> by <%= artist %></span>' + 
    '<button class="addToQueue">Queue</button><button class="addToPlaylist">Playlist</button>'),

  events: {
    'click .addToQueue': function(){
      this.model.enqueue();
    },
    'click .addToPlaylist': function(){
      this.model.addToPlaylist();
    }
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
