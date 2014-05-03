var SongsQueue = Backbone.Collection.extend({
  
  model: Song,
  
  playFirst: function(){
    this.at(0).play();
    this.remove(this.at(0));
  }

});
