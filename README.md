# Liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

## Getting Started

This liri-node-app can take in one of the following commands:

* `my-tweets`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`

### What Each Command Should Do

1. `node liri.js my-tweets`

   * This will show your last 20 tweets and when they were created at in your terminal/bash window.

   ![node liri.js my-tweets](/images/my-tweets.PNG)

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

    ![node liri.js spotify-this-song Believer](/images/spotifty-this-song-Believer.PNG)

   * if no song is provided then your program will default to
     * "Get Up Offa That Thing" by James Brown

    ![node liri.js spotify-this-song](/images/spotify-this-song.PNG)

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
       * Rotten Tomatoes URL.
     ```
	![node liri.js movie-this The Hangover](/images/movie-thisTheHangover.PNG)

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
     * It's on Netflix!

    ![node liri.js movie-this](/images/movie-this.PNG)

4. `node liri.js do`
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     * Feel free to change the text in that document to test out the feature for other commands.

     ![node liri.js do](/images/do.PNG)

## Built With

* Node.js
* Twitter npm
* node-spotify-api npm
* fs npm
* request npm (to get data from Omdb API)

#Examples



