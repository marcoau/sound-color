var NewPlaylistView = Backbone.View.extend({
  
  className: 'newPlaylist',

  events: {
    'click .addPlaylist': function(){
      this.collection.addPlaylist(this.$el.find('.addPlaylistName').val());
    },
    'keypress .addPlaylistName': function(e){
      if(e.keyCode === 13){
        this.collection.addPlaylist(this.$el.find('.addPlaylistName').val());        
      }
    }
  },

  initialize: function(){
    this.render();
    this.collection.on('reset', function(){
      this.$el.html('');
      this.render();
    }, this);
    this.collection.on('add', function(song){
      this.$el.find('.addPlaylist').show();
      this.$el.find('.addPlaylistName').show();
      this.$el.append(new NewPlaylistEntryView({model: song}).$el);
    },this);
    this.collection.on('remove', function(){
      console.log('remove');
      if(this.collection.length === 0){
        this.$el.find('.addPlaylist').hide();
        this.$el.find('.addPlaylistName').hide();
      }
    }, this);
  },

  render: function(){
    this.$el.append('<div class="sectionHeader"><span class="sectionTitle">New Playlist</span>' + 
      '<button class="addPlaylist">Add</button>' +
      '<input class="addPlaylistName" type="text" placeholder="Name" /></div>');
  }

});
