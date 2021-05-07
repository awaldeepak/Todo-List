const express = require('express');
const db = require('./config/mongoose');
const Todo = require('./models/todo');


const app = express();
const port = 8000;

app.use(express.urlencoded());


app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));


app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the server: ${err}`);

    }

    console.log(`Server is up and running on port: ${port}`);
});
