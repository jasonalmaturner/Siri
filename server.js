var http = require('http');


var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that.", "Jacob is a poonug", "You bet your sweet and sour chicken I can do that"];
var port = 8887;
var onRequest = function(req, res) {
	console.log('listening on port' + port)
	if(req.method === 'GET'){
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'			
		});
		res.end(JSON.stringify({message: randomMessage(messages)}))
	}

	if(req.method === 'OPTIONS') {
		rew.writeHead(200, {
			'Connection': 'close',
		  'Content-Type': 'application/json',
		  'Access-Control-Allow-Origin': '*',
		  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
		res.end();
	}


}

var randomMessage = function(array){
	var num = Math.floor(Math.random()*(array.length));
	return array[num];
}
http.createServer(onRequest).listen(port);