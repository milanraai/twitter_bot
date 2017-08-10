console.log("The Bot is starting");

var Twit = require("twit");
var config = require('./config');

var T = new Twit(config);

var params = { 
	q: 'banana', 
	count: 2 
}

//tweets random to https://twitter.com/diwas_raai 
setTweet();
setInterval(setTweet, 1000*20);

function setTweet() {
	// body...

	var r = Math.floor(Math.random()*100);

	var textToTweet = {
		status : "random tweet #" + r 
	}

	T.post('statuses/update', textToTweet, tweeted );

	function tweeted(err, data, response) {
	  console.log(textToTweet.status + " - posted to twitter")
	}
}


// T.get('search/tweets',
// 	params,
// 	gotData);

//function gotData(err, data, response) {
//  var tweets = data.statuses;
//
//  for (var x in tweets){
//  	 console.log(tweets[x].text + '*****************'); 
//  }
//}

// T.post('statuses/update', { status: 'My first tweet is from a bot. #myfirstTweet' }, function(err, data, response) {
//   console.log(response + " tweeted!!")
// })
