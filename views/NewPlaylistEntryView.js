var NewPlaylistEntryView = Backbone.View.extend({

  template: _.template('<span><%= title %> by <%= artist %></span>' + 
    '<button class="removeFromQueue">Remove</button>'),

  events: {
    'click .removeFromQueue': function(){
      this.model.removeFromPlaylist();
    }
  },

  initialize: function(){
    this.render();
    this.model.on('remove', function(){
      this.remove();
    }, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
