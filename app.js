var bodyParser = require('body-parser'); 
var express = require('express'); 
var app = express();
var router = express.Router();
let data = require('./data');

/*let message = {
    id : "1",
	"name" : "Arni", 
	"age" : "38"
};*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

app.get('/', function(req,res,next) {
    res.send('Hello world'); 
    next();
});

app.get('/list', function (req,res,next) {
    res.json( 
                {"message" : "thu ert vitlaus" }
            )
    next();
});

/*app.use('/list/:id', function(req, res, next) {
    console.log('Request Type:', req.method);
});

app.get('/list/:id', function(req, res, next) {
    res.send('balba');
});
*/

app.get('/list/:id', function(req, res, next){
    const idItem = req.params.id;
    const item = data.find(_item => _item.id ===idItem);

    if(item) {
        res.json(item); 
    }
    else {
        res.json( { message : 'Item ${idItem} er ekki til'});
    }
    next();
});

var server = app.listen(8080, function() {
	console.log('Listen on port 8080'); 
});

