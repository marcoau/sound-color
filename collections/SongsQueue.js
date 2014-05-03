var SongsQueue = Backbone.Collection.extend({
  
  model: Song,

  initialize: function(){
    this.on('dequeue', function(song){
      this.remove(song);
    }, this)
  },
  
  playFirst: function(){
    this.at(0).play();
    this.remove(this.at(0));
  }

});
