// Require node modules that you need
var express = require('express');
var layouts = require('express-ejs-layouts');
var parser = require('body-parser');
var geocoder = require('simple-geocoder')
var request = require('request')

// Declare your app
var app = express();
require('dotenv').config();


// Tell express what view engine you want to use
app.set('view engine', 'ejs');

// Include any middleware here
app.use(layouts);
app.use(express.static('static'));
app.use(parser.urlencoded({ extended: false }));

// Declare routes
app.get('/', function(req, res){
  res.render('home');
});

app.post('/', function(req, res){
	console.log(req.body.location);
	geocoder.geocode(req.body.location, function(success, location){
		if(success){
			var urlToCall = process.env.DARK_SKY_BASE_URL + location.y + ',' + location.x;
			console.log(urlToCall);
			request(urlToCall, function(err, response, body){
				if(err){
					console.log('Error (request):', err);
					res.render('error');
				} 
				else{
					var weatherResult = JSON.parse(body);
					res.render('result', {
						lat: location.y, 
						lng: location.x, 
						query: req.body.location,
						weatherResult: weatherResult
					});

				}
			});

		}
		else {
			console.log('error:', success, location);
			res.render('error')

		}
		
	})
  
});

// Listen on PORT 3000
app.listen(3000, function(){
  console.log('Im listening to the smooth sounds of port 3000 in the morning. ☕');
});
