var SongsQueueView = Backbone.View.extend({
  
  className: 'songsQueue',

  initialize: function(){
    this.render();
    this.collection.on('add', function(song){
      console.log('hey');
      this.$el.append(new SongsQueueEntryView({model: song}).$el);
    },this);
  },

  render: function(){
    this.$el.append('<h3>Queue</h3>');
  }

});
