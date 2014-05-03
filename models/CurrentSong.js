var CurrentSong = Backbone.Model.extend({
  
  initialize: function(){
    this.set({song: undefined});
  },

  ended: function(){
    this.set({song: undefined});
    this.trigger('ended');
  }
});
