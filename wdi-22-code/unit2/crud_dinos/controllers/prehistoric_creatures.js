var express = require('express');
var router = express.Router();
var ejsLayouts = require('express-ejs-layouts');
var fs = require('fs');
var creatureData = fs.readFileSync('./prehistoric_creatures.json');
creatureData = JSON.parse(creatureData);

router.get('/', function(req, res){
	res.render('creatures_view/index', {myCreatures: creatureData})
	console.log("hello")
})


router.get('/new', function(req, res){
	res.render('creatures_view/new')
})



router.get('/:idx', function(req, res){
	if(req.params.idx<creatureData.length+1){
		res.render('creatures_view/show', {creature: creatureData[req.params.idx-1]})
	}else{
		res.send("we only have " +creatureData.length+" creature at this time")
	}
})




router.post('/', function(req, res){
	console.log(req.body);
	creatureData.push(req.body);

	//save our dino to our json file
	fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(creatureData));
	res.redirect('/prehistoric_creatures')
})

module.exports = router;