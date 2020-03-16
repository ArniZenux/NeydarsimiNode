var bodyParser = require('body-parser'); 
var express = require('express'); 
var app = express();
var router = express.Router();

let message = {
	"name" : "Arni", 
	"age" : "38"
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

router.use(function(req, res, next) {
	console.log('Eitthvad er gerdast'); 
	next(); 
});

router.get('/', function(req,res) {
	res.json(message); 
});

router.route('/list').post(function (req,res) {
	res.json({ message: 'Hello list' });
});

app.use('/api', router); 

var server = app.listen(3000, function() {
	console.log('Listen on port 3000'); 
});

