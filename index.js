const express = require('express');
const app = express();
const port = process.env.port||8000;



app.use(express.static('./assets'));
//called middleware before router 
app.use(express.urlencoded());

//using express router
app.use('/',require('./routes/index'));


//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is up and running at port: ${port}`);
})