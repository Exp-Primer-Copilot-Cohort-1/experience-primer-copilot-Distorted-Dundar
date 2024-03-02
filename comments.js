// Create web server
var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

// Set up the path to the static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, function() {
	console.log('Server started on port ' + port);
});

// Path: comments.js
// Create a route to handle incoming GET requests
app.get('/comments', function(req, res) {
	// Create an array of comments
	var comments = ["hi"];
});
