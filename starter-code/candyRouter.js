var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
		{	
		"id":1,
		"name":"Chewing Gum",
		"color":"Red" 
		},
		{
		"id":2,
		"name":"Pez",
		"color":"Green"
		},
		{
		"id":3,
		"name":"Marshmallow",
		"color":"Pink"
		},
		{
		"id":4,
		"name":"Candy Stick",
		"color":"Blue"
		}];

router.get("/", function(req, res){
		res.send(candies);
	});
router.post("/", function(req, res){
		req.body.id = 3;
		candies.push(req.body);
		res.json(reqcandies);
	});	

//What would need to go into candies
//in order to pass our first test?

// Fill out the rest of the routes here
router.get("/greet/:number", function(req, res){
	res.send("Hello," + number);
});
module.exports = router;