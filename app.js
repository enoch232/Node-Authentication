var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set("view engine", "ejs");
var port = process.env.PORT || 3000;
console.log("Server is now running at port " + port);
app.listen(port);

app.get("/", function(req, res){
	res.render('index');
});
