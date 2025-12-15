/*
Suppose you are building a music streaming application that allows users to listen to different types of music.
You want to create a class hierarchy to represent the different types of music available for streaming.

Objective:
Create a class hierarchy with the following classes:

Media (Base Class):
Properties:
title (string)
artist (string)
duration (number)
Methods:
getTitle() - Returns the title of the media.
getArtist() - Returns the artist of the media.
getDuration() - Returns the duration of the media.

Song (Inherits from Media):
Additional Properties:
album (string)
genre (string)
Additional Methods:
getAlbum() - Returns the album of the song.
getGenre() - Returns the genre of the song.

PopSong (Inherits from Song):
Additional Properties:
danceability (number)
energy (number)
Additional Methods:
getDanceability() - Returns the danceability of the pop song.
getEnergy() - Returns the energy of the pop song.

RockSong (Inherits from Song):
Additional Properties:
distortion (number)
tempo (number)
Additional Methods:
getDistortion() - Returns the distortion of the rock song.
getTempo() - Returns the tempo of the rock song.

Podcast (Inherits from Media):
Additional Properties:
host (string)
topic (string)
Additional Methods:
getHost() - Returns the host of the podcast.
getTopic() - Returns the topic of the podcast.

NewsPodcast (Inherits from Podcast):
Additional Properties:
source (string)
Additional Methods:
getSource() - Returns the source of the news podcast.
getDuration() - Overrides the getDuration() method from Media.

ComedyPodcast (Inherits from Podcast):
Additional Properties:
comedian (string)
rating (number)
Additional Methods:
getComedian() - Returns the comedian of the comedy podcast.
getRating() - Returns the rating of the comedy podcast.

Note:
Each object should be able to access its parent properties and methods.
Your code will be evaluated on this basis only.

Hint:
Use the super keyword in the constructor of each inherited class to call the parent class constructor and initialize its properties.
If you override a method in a child class, you can use super to call the parent class method to reuse or extend its functionality. For example: super.getDuration();

*/
//Create the required Classes with each inheriting Class as specified in the Problem Statement.
function main() {
  // Crete your class media with proper constructor properties and methods as mentioned.
    class Media{
        // properties
        title;
        artist;
        duration;

        // constructor
        constructor(title,artist,duration){
            this.title = title;
            this.artist = artist;
            this.duration = duration;
        }

        // method
        getTitle(){
            return this.title;
        }
        getArtist(){
            return this.artist;
        }
        getDuration(){
            return this.duration;
        }
    }

  //Create a Class Song extending the Media with proper constructor ,properties and methods
    class Song extends Media{
        // properties
        album;
        genre;

        // constructor
        constructor(title,artist,duration,album,genre){
            super(title,artist,duration);
            this.album = album;
            this.genre = genre;
        }

        // methods
        getAlbum(){
            return this.album;
        }
        getGenre(){
            return this.genre;
        }
    }
  //Create class PopSong and PockSong using Song class
    //  PopSong
    class PopSong extends Song{
        // properties
        danceability;
        energy;

        // constructor
        constructor(title,artist,duration,album,genre,danceability,energy){
            super(title,artist,duration,album,genre);
            this.danceability = danceability;
            this.energy = energy;
        }

        // methods
        getDanceability(){
            return this.danceability;
        }
        getEnergy(){
            return this.energy;
        }
    }

    // RockSong
    class RockSong extends Song{
        // properties
        distortion;
        tempo;

        //  constructor
        constructor(title,artist,duration,album,genre,distortion,tempo){
            super(title,artist,duration,album,genre);
            this.distortion = distortion;
            this.tempo = tempo;
        }

        // methods
        getDistortion(){
            return this.distortion;
        }
        getTempo(){
            return this.tempo;
        }
    }
  //Create a class Podcast inherting from the Media
    class Podcast extends Media{
        // properties
        host;
        topic;

        // constructor
        constructor(title,artist,duration,host,topic){
            super(title,artist,duration);
            this.host = host;
            this.topic = topic;
        }

        getHost(){
            return this.host;
        }
        getTopic(){
            return this.topic;
        }
    }
  //Create NewsPodcast and ComedyPodcast using the Podcast class.
    // NewsPodcast
    class NewsPodcast extends Podcast{
        // properties
        source;

        // constructor
        constructor(title,artist,duration,host,topic,source){
            super(title,artist,duration,host,topic);
            super.getDuration();
            this.source =source;
        }
        getSource(){
            return this.source;
        }
        // getDuration(){
            // return this.duration;
        // }
    }

    // ComedyPodcast
    class ComedyPodcast extends Podcast{
        // properties
        comedian;
        rating;

        // constructor
        constructor(title,artist,duration,host,topic,comedian,rating){
            super(title,artist,duration,host,topic);
            this.comedian = comedian;
            this.rating = rating;
        }

        // methods
        getComedian(){
            return this.comedian;
        }
        getRating(){
            return this.rating;
        }
    }
  //Your code will be evaluated on basis of these operation.
  const popSong = new PopSong(
    "Shape of You",
    "Ed Sheeran",
    235,
    "?",
    "Pop",
    0.825,
    0.652
  );
  console.log(popSong.getTitle()); // should output 'Shape of You'
  console.log(popSong.getArtist()); // should output 'Ed Sheeran'
  console.log(popSong.getDuration()); // should output 235

  console.log(popSong.getAlbum()); // should output '?'
  console.log(popSong.getGenre()); // should output 'Pop'
  console.log(popSong.getDanceability()); // should output 0.825
  console.log(popSong.getEnergy()); // should output 0.652

  const rockSong = new RockSong(
    "Stairway to Heaven",
    "Led Zeppelin",
    482,
    "Led Zeppelin IV",
    "Rock",
    0.056,
    63.5
  );
  console.log(rockSong.getTitle()); // should output 'Stairway to Heaven'
  console.log(rockSong.getArtist()); // should output 'Led Zeppelin'
  console.log(rockSong.getDuration()); // should output 482
  console.log(rockSong.getAlbum()); // should output 'Led Zeppelin IV'
  console.log(rockSong.getGenre()); // should output 'Rock'
  console.log(rockSong.getDistortion()); // should output 0.056
  console.log(rockSong.getTempo()); // should output 63.5

  const newsPodcast = new NewsPodcast(
    "The Daily",
    "The New York Times",
    30,
    "Michael Barbaro",
    "News",
    "The New York Times"
  );
  console.log(newsPodcast.getTitle()); // should
  // output 'The Daily'
  console.log(newsPodcast.getArtist()); // should output 'The New York Times'
  console.log(newsPodcast.getDuration()); // should output 30
  console.log(newsPodcast.getHost()); // should output 'Michael Barbaro'
  console.log(newsPodcast.getTopic()); // should output 'News'
  console.log(newsPodcast.getSource()); // should output 'The New York Times'

  const comedyPodcast = new ComedyPodcast(
    "My Favorite Murder",
    "Karen Kilgariff and Georgia Hardstark",
    60,
    "Karen Kilgariff and Georgia Hardstark",
    "Comedy",
    "Karen Kilgariff and Georgia Hardstark",
    4.8
  );
  console.log(comedyPodcast.getTitle()); // should output 'My Favorite Murder'
  console.log(comedyPodcast.getArtist()); // should output 'Karen Kilgariff and Georgia Hardstark'
  console.log(comedyPodcast.getDuration()); // should output 60
  console.log(comedyPodcast.getHost()); // should output 'Karen Kilgariff and Georgia Hardstark'
  console.log(comedyPodcast.getTopic()); // should output 'Comedy'
  console.log(comedyPodcast.getComedian()); // should output 'Karen Kilgariff and Georgia Hardstark'

  console.log(comedyPodcast.getRating()); // should output 4.8
  return {
    Media,
    Song,
    Podcast,
    PopSong,
    RockSong,
    NewsPodcast,
    ComedyPodcast
  };
}
main()