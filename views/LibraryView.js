var LibraryView = Backbone.View.extend({

  className: 'library',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.append('<h3>Library</h3>');
    this.collection.each(function(song){
      this.$el.append((new LibraryEntryView({model: song})).$el);
    }, this);
  }
});
