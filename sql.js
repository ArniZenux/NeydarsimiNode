var sqlite3 = require('sqlite3').verbose(); 

let db = new sqlite3.Database(':memory:', (err) => {
	if(err) {
		return console.error(err.message); 
	}
	console.log('Connected to the in-memory SQLite database.'); 
});

db.close( function(err) {
	if(err) {
		return console.error(err.message);
	}
	console.log('The Database is closed'); 
});