var AppModel = Backbone.Model.extend({

  initialize: function(library){
    this.set({library: library});
    this.set({currentSong: new CurrentSong()});
    this.set({songsQueue: new SongsQueue()});
    this.set({newPlaylist: new NewPlaylist()});
    this.set({playlists: new Playlists()});

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

    this.get('library').on('addToPlaylist', function(song){
      this.get('newPlaylist').add(song);
    }, this);

    this.get('newPlaylist').on('addPlaylist', function(name, songs){
      var playlistModelSongs = new Songs();
      songs.each(function(song){
        playlistModelSongs.add(song);
      });
      this.get('playlists').add(new PlaylistModel(name, playlistModelSongs));
      this.get('newPlaylist').reset();
    }, this);

    this.get('playlists').on('playPlaylist', function(playlist){
      this.get('currentSong').set({song: undefined});
      this.get('songsQueue').reset();
      debugger;
      playlist.get('songsList').each(function(song){
        if(this.get('currentSong').get('song')){
          //there is a current song playing
          this.get('songsQueue').add(song);
        }else{
          //there is no current song playing
          this.get('currentSong').set({song: song});
        }
      }, this);
    }, this);
  }

});
