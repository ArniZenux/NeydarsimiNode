var sqlite3 = require('sqlite3').verbose(); 
var bodyParser = require('body-parser'); 
var express = require('express'); 
var app = express();
var router = express.Router();
let data = require('./data');
const http = require('http');

const port = 8080; 
const hostname = '127.0.0.1';

/*const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

app.get('/', function(req,res,next) {
    res.send('Hello world'); 
    next();
});
*/

app.get('/list', function (req,res,next) {
    res.json( 
                {"message" : "thu ert vitlaus" }
            )
    next();
});

/*
app.use('/list/:id', function(req, res, next) {
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

app.listen(port, hostname, function() {
	console.log("Server running at http:// %s:%s",hostname, port); 
});