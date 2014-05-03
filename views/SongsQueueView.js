var SongsQueueView = Backbone.View.extend({
  
  className: 'songsQueue',

  initialize: function(){
    this.render();
    //this.on('add')
  },

  render: function(){
    this.$el.append('<h3>Queue</h3>');
  }

});
