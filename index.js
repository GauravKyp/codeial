const  express = require('express');
const app = express();
const port = 8080;
const host = "localhost";

// use express router
app.use('/', require('./routes'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port,host ,function(err){

if(err){
    console.log(`Error in running the server ${err}`);
}
 console.log(`Server is running on http://${host}:${port}`);

});

