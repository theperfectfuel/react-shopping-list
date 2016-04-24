var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/baby', function(req, res) {
	res.send('Yes baby!');	
});

app.listen(8080, function() {
	console.log('schwork');
});
