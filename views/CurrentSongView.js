var CurrentSongView = Backbone.View.extend({

  className: 'currentSong',

  template: _.template('<p>Now Playing: {<%= title %> by <%= artist %>}</p>'),

  initialize: function(){
    this.render();
    this.model.on('change:song', function(){
      this.render();
    }, this);
  },

  render: function(){
    return this.$el.html(this.model.get('song') ? this.template(this.model.get('song').attributes) : '<p>Now Playing: </p>');
  }

});
