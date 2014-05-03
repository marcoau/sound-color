var AppModel = Backbone.Model.extend({

  initialize: function(library){
    this.set({library: library});
    this.set({currentSong: new CurrentSong()});
    this.set({songsQueue: new SongsQueue()});

    //play listeners
    this.get('library').on('play', function(song){
      this.get('currentSong').set({song: song});
    }, this);
    this.get('songsQueue').on('play', function(song){
      this.get('currentSong').set({song: song});
    }, this);
  
    this.get('library').on('enqueue', function(song){
      if(this.get('currentSong').get('song')){
        //there is a current song playing
        this.get('songsQueue').add(song);
      }else{
        //there is no current song playing
        song.play();
      }
    }, this);

    this.get('currentSong').on('ended', function(){
      this.get('songsQueue').playFirst();
    }, this);
  }

});
