var CurrentSongView = Backbone.View.extend({

  template: _.template('<p>Now Playing: {<%= title %> by <%= artist %>}</p>'),

  initialize: function(){
    this.model.on('change:song', function(){
      this.render();
    });
  },

  render: function(){
    return this.$el.html(this.model.get('song') ? this.template(this.model.get('song').attributes) : '');
  }

});
