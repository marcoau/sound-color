var AppModel = Backbone.Model.extend({

  initialize: function(library){
    this.set({library: library});
    this.set({currentSong: new CurrentSong()});
    this.set({songsQueue: new SongsQueue()});
  
    this.get('library').on('enqueue', function(song){
      if(this.get('currentSong').get('song')){
        //there is a current song playing
        this.get('songQueue').add(song);
      }else{
        //there is no current song playing
        this.get('currentSong').set({song: song});
      }
    });
  }

});
