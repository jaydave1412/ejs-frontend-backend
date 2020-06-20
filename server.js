const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(layouts);

app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000,()=>{
    console.log("server running");
    
})