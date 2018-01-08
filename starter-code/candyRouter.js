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
	console.log("all candies");
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
	console.log("created");
	candies.push(req.body);
	res.json(req.body);
});	

//update candy
router.put("/:id/update", function(req, res){
	console.log("updating");
	for(var i = 0; i < candies.length; i++){
		console.log(i);
      	console.log(req.params.id);
		if(candies[i] == req.params.id);
	}
  	res.format({
    json: function(){ res.json(req.body); }
  	});
	// candies.find(candies[req.params.id-1], candies);
	// res.json(candies[req.params.id-1]);
});	

//delete candy
router.delete('/:id', function(req, res) {
	console.log("deleted");
	delete (candies[req.params.id-1]);
	res.json({message : 'deleted' });
});
  
module.exports = router;

