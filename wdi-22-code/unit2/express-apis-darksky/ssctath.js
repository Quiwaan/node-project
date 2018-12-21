
var geocoder = require('simple-geocoder')
// Declare your app



geocoder.geocode("seattle,wa" ,function(sucess, location){
		if(sucess){
			console.log(location)
		}
		
	})