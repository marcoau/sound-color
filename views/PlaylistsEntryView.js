var PlaylistsEntryView = Backbone.View.extend({

  template: _.template('<span><%= name %></span>' + 
    '<button class="playPlaylist">Play</button>' +
    '<button class="removeFromPlaylists">Remove</button>'),

  events: {
    'click .playPlaylist': function(){
      this.model.playPlaylist();
    },

    'click .removeFromPlaylists': function(){
      this.model.removeFromPlaylists();
    }
  },

  initialize: function(){
    this.render();
    this.model.on('removeFromPlaylists', function(){
      this.remove();
    }, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
