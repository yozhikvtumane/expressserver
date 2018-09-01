const express = require('express');
const path = require('path');
const app = express();
var date = new Date();

var count = 0;
var logger = (req, res, next) => {
	//  console.log(res);
	const now = new Date();
	var d = now.getDate();
	var m = now.getMonth() + 1;
	var h = now.getHours();
	var y = now.getFullYear();
	var mins = now.getMinutes();
	var s = now.getSeconds();
	count++;
	console.log(count + " " + d + "/" + m + "/" + y + " " + h + ":" + mins + ":" + s + " " + req.method + " " + req.originalUrl + " " + res.statusCode)
	 next();
};

app.use(logger);
app.use(express.static(path.join(__dirname + '/public/')));

app.listen('3000' , () => console.log('started'));
