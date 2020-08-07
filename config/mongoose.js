const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/to_do_list');
// making use and modify disabled
mongoose.set('useFindAndModify', false);;
const db = mongoose.connection;


db.on('error',console.error.bind(console,'Connection: Error'));

db.once('open',function(){
    console.log('Successfully connected to the database');
});
module.exports = db;