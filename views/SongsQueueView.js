var SongsQueueView = Backbone.View.extend({
  
  className: 'songsQueue',

  initialize: function(){
    this.render();

    this.collection.on('reset', function(){
      console.log('reset queue');
      this.$el.html('');
      this.render();
    }, this);

    this.collection.on('add', function(song){
      console.log('add to queue');
      this.$el.append(new SongsQueueEntryView({model: song}).$el);
    }, this);
  },

  render: function(){
    this.$el.append('<h3>Queue</h3>');
  }

});
