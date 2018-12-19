var express = require("express");

var app = express()

app.get("/", function(req, res){
	res.sendFile(__dirname+'/views/index.html');
});


app.get("/about", function(req, res){
	res.sendFile(__dirname+'/views/about.html');
});


app.get("/blog", function(req, res){
	res.sendFile(__dirname+'/views/blog-directory.html');
});


app.listen(8000);