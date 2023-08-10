const  express = require('express');
const app = express();
const port = 8080;
const host = "localhost";

// use express router
app.use('/', require('./routes'));


app.listen(port,host ,function(err){

if(err){
    console.log(`Error in running the server ${err}`);
}
 console.log(`Server is eunning on http://${host}:${port}`);

});

