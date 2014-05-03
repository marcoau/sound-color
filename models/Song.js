var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  addToPlaylist: function(){
    this.trigger('addToPlaylist', this);
  },

  removeFromPlaylist: function(){
    this.trigger('removeFromPlaylist', this);
  }

});
