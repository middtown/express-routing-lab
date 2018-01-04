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

//index candy
router.get("/", function(req, res){
	console.log("getting");
	res.send(candies);
});
//show candy
router.get("/:id", function(req, res){
	console.log("getting by id #");
	candies.push(req.body);
	res.send(candies[req.params.id-1]);
});
//create candy
router.post("/", function(req, res){
	console.log("posting");
	candies.push(req.body);
	res.json(req.candies);
});	
//update candy
router.put("/:id", function(req, res){
	console.log("updating");
	candies.push(req.body);
	res.json(candies[req.params.id-1]);
});	
//delete candy
router.delete('/:id', function(req, res) {
	console.log("deleted");
	res.json({message : 'deleted' });
	res.json(candies[req.params.id-1]);
});
  
router.get("/greet/:number", function(req, res){
	res.send("Hello," + number);
});

module.exports = router;

