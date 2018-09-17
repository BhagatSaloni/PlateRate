// server.js
// load the things we need
var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var file = fs.createWriteStream("data.json")
var https = require('https')
var data = fs.readFileSync('data.json')

var d = fs.readFileSync('d.json')
var words = JSON.parse(d);
//var file = fs.createWriteStream("data.txt")
var https = require('https');
var http = require('http');

//var bodyParser= require('body-parser');
var about = fs.readFileSync('aboutme.json');
var abt= JSON.parse(about);
var request = require('request');


// set the view engine to ejs
app.set('view engine', 'ejs');


// index page 
const url = 'https://jsonplaceholder.typicode.com/posts';

app.get('/', function(req, res) {
  request(url, function(error, response, body) {
    const info = JSON.parse(body);
    res.render('pages/index', { info });
  });
});

app.get('/about/', function(req, res, next) {
	
	res.json({"Tell me a little bit about yourself?":"I am a recent graduate holding a masters degree in CS with a strong background in the technological industry.Along with my experience as software intern in telecommunication company , I have developed projects for the small companies as a freelancer  in my home country. Currently I am levaraging my time in learning new ascepts suchs as web scrapping , integrating API and trying out hands on ML models. I am person who thrives in a fast pace environment so right now, I am looking for an opportunity to apply my technology expertise along with my creative problem solving skills at a innovative software company."," What excites you about technology?" : " Technology is something which is changing and everyday new features and new inventions are done. In this ever changing environment of technology I would like to capture and learn to it max.","What is your preferred technology stack?" : "My prefered tech stack will be Python , MySQL and Mongo DB followed by Javascript. " ,"What are your favorite hobbies?" : " Travelling, Dancing and collecting coins."});
});

app.get('/about/:id', function(req, res, next) {
	var id = req.params.id;
	
	if (id === 'description'){
		 res.json({ "Tell me a little bit about yourself?":"I am a recent graduate holding a masters degree in CS with a strong background in the technological industry.Along with my experience as software intern in telecommunication company.I have developed projects for the small companies as a freelancer  in my home country. Currently I am levaraging my time in learning new ascepts suchs as web scrapping , integrating API and trying out hands on ML models. I am person who thrives in a fast pace environment so right now, I am looking for an opportunity to apply my technology expertise along with my creative problem solving skills at a innovative software company.",
" What excites you about technology?" : " Technology is something which is changing and everyday new features and new inventions are done. In this ever changing environment of technology I would like to capture and learn to it max."
, " What is your preferred technology stack?" : "My prefered tehc stack will be Python , MySQL and Mongo DB followed by Javascript. " ,
"What are your favorite hobbies?" : " Travelling, Dancing and collecting coins."});
		}
  
	else if (id === 'tech'){
		 res.json({ " What excites you about technology?" : " Technology is something which is changing and everyday new features and new inventions are done. In this ever changing environment of technology I would like to capture and learn to it max." });
		}
  	else if (id === 'techstack'){
  		res.json({ " What is your preferred technology stack?" : "My prefered tehc stack will be Python , MySQL and Mongo DB followed by Javascript. "  });
		}
	else if (id === 'hobbies'){
  		res.json({"What are your favorite hobbies?" : " Travelling, Dancing and collecting coins." });
		}
	else {
		res.send("Not FOund");
	}


});


app.listen(8080);
console.log('8080 is the magic port');