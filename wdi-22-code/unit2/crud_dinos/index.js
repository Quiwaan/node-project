var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var fs = require('fs');
var dinoData = fs.readFileSync('./dinos.json');
dinoData = JSON.parse(dinoData);
var creatureData = fs.readFileSync('./prehistoric_creatures.json');
creatureData = JSON.parse(creatureData);

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false}));


app.use('/dinosaurs', require('./controllers/dinosaurs'));
app.use('/prehistoric_creatures', require('./controllers/prehistoric_creatures'));




app.listen(8000);