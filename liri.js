
var keys = require("./key.js");
var Twitter= require("twitter");
var Spotify= require("node-spotify-api");
var request= require("request")
// fs is a core Node package for reading and writing files
var fs = require("fs");

//user input in command line
var command= process.argv[2];
//variable to hold song and movie
var song= process.argv[3];
//used for looping through process.argv array
var args= process.argv;

var search="";

//TWITTER------------------------------------------------------------------------------
var twitterKeys= keys.twitterKeys;
//create a new twitter client with the keys
var clientTwitter= new Twitter(twitterKeys);


//SPOTIFY----------------------------------------------------------------------------
var spotifyKeys= keys.spotifyKeys;
//create a new spotify client with the keys
var clientSpotify= new Spotify(spotifyKeys);
//spotify-this-song (3rd input)
// var songString= "spotify-this-song";


//OMDB---------------------------------------------------------------------------------
//movie-this (3rd input)
var movieString= "movie-this";
var queryUrl


function runLiri(){

	switch(command){
		case "my-tweets":
			twitter();
			break;

		case "spotify-this-song":
			spotify(song);
			break;

		case movieString:
			omdb();
			break;

		//"do-what-it-says"
		case "do":
			textFile();
			break;
	}
}



function searchTerm(){
	for(var i=3; i<args.length; i++){
		if(i>3 && i<args.length){
			search= search + args[i] + " ";
		}
		else{
			search= search + args[3] + " ";
		}
	}

	return search;
}


function twitter(){
	clientTwitter.get('statuses/user_timeline', function(error, tweets, response){
	if(error){
		throw error;
	}

	// console.log(tweets);

	for(var i=0; i< tweets.length; i++){
		console.log("___________________________________________________________\n")
		console.log("Data Created: " + tweets[i].created_at);
		console.log("Tweet: " + tweets[i].text + "\n");
	}
	
	});		
}


function spotify(song){
	// searchTerm();

	if(song==undefined){
		song= "Get Up offa that thing";
	}

	clientSpotify.search({
		type: "track",
		query: song
	}, function(err,data){
			if (err) {
		   	return console.log('Error occurred: ' + err);
		  	}

		  	// console.log(data);

		  	// JSON.stringify turns a Javascript object into JSON text and stores that JSON text in a string.
		  	// console.log(JSON.stringify(data, null, 2));

		  	console.log("\n--------------------------------------------------------\n")
		  	console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name);
		  	console.log("Song Name: " + data.tracks.items[0].name);
		  	console.log("Album: " + data.tracks.items[0].album.name);
		  	console.log("Song preview " + data.tracks.items[0].album.artists[0].href);
		  	console.log("\n--------------------------------------------------------\n")

	});
}

function omdb(){

	if(song==undefined){
		search= "Mr. Nobody";
	}
	queryUrl = "http://www.omdbapi.com/?t=" + searchTerm() + "&y=&plot=short&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {

		// If the request is successful
		if (!error && response.statusCode === 200) {

			console.log("\n_______________________________________________________________________\n")
			// console.log(JSON.parse(body));
			//using es6 syntax for practice!!
			console.log(`Title of the movie: ${JSON.parse(body).Title} \n`);
			console.log(`Year the movie came out: ${JSON.parse(body).Year} \n`);
			console.log(`IMDB Rating of the movie: ${JSON.parse(body).imdbRating} \n`);
			console.log(`Country where the movie was produced: ${JSON.parse(body).Country} \n`);
			console.log(`Language of the movie: ${JSON.parse(body).Language} \n`);
			console.log(`Plot of the movie: ${JSON.parse(body).Plot} \n`);
			console.log(`Actors in the movie: ${JSON.parse(body).Actors} \n`);
			console.log(`Rotten Tomatoes URL: ${JSON.parse(body).Website} \n`);
		}
	});

}

function textFile(){
	fs.readFile("random.txt", "utf8", function(error, data){
		if (error) {
			return console.log(error);
		}

		console.log(data);

		var comma= data.indexOf(",");
		console.log(comma);

		command= data.slice(0,comma);
		song = data.slice(comma+1);


		// //debugging
		// console.log(command);
		// console.log(typeof(command))
		// console.log(song);
		// console.log(typeof(song))

		runLiri();	

	})
}

runLiri();
//------------------------------------
//QUESTIONS

//-why did I have to parse ombd body 
//- but stringify spotify response?
//- why don't they come in same format?

//
//-----------------------------------	