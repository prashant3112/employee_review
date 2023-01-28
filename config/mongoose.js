
const mongoose = require('mongoose');

// connect from mongodb
mongoose.connect('mongodb://0.0.0.0/review');
  
// acquire connection if it is successful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("successfully connected to database!");
});

module.exports = db;