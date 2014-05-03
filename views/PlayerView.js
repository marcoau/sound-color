var PlayerView = Backbone.View.extend({
  el: '<audio controls autoplay />',

  initialize: function(){
    this.model.on('change:song', function(){
      this.render();
    });
  },

  render: function(){
    return this.$el.attr('src', this.model.get('song') ? this.model.get('song').get('url') : '');
  }

});
