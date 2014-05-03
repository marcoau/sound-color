var PlayerView = Backbone.View.extend({
  el: '<audio controls autoplay />',

  events: {
    ended: function(){
      this.model.ended();
    }
  },

  initialize: function(){
    this.model.on('change:song', function(){
      this.render();
    }, this);
    this.model.on('ended:song', function(){
      console.log(this);
    }, this);
  },

  render: function(){
    return this.$el.attr('src', this.model.get('song') ? this.model.get('song').get('url') : '');
  }

});
