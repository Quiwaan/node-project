var express = require('express');
var router = express.Router();
var ejsLayouts = require('express-ejs-layouts');
var fs = require('fs');
var dinoData = fs.readFileSync('./dinos.json');
dinoData = JSON.parse(dinoData);





router.get('/', function(req, res){
	var nameFilter= req.query.nameFilter;
	if(nameFilter){
		filteredData = dinoData.filter(function(dino){
			return dino.name.toLowerCase() === nameFilter.toLowerCase();
		});
		res.render('dino_views/index', {myDinos: filteredData} )
	} else{
		res.render('dino_views/index',{myDinos: dinoData} )
	}
})

router.get('/new', function(req, res){
	res.render('dino_views/new')
})

router.get('/:idx', function(req, res){
	if(req.params.idx<dinoData.length+1) {
		res.render('show', {dino: dinoData[req.params.idx-1]})
	} else {
		res.send("we only have " +dinoData.length+" dinos at this time")
	}
})

router.post('/', function(req, res){
	console.log(req.body);
	dinoData.push(req.body);

	//save our dino to our json file
	fs.writeFileSync('./dinos.json', JSON.stringify(dinoData));
	res.redirect('/dinosaurs')
})


module.exports = router;