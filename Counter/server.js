var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var session = require('express-session');
// create the express app
var app = express();
var bodyParser = require('body-parser');

// use bodyParser!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'codingdojorocks'}));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
        var counter = req.session.name;
        if(req.session.name == null){
                counter=1;
        }
        else{counter++;}
        req.session.name = counter;
        console.log(req.session.name);
        console.log(counter);
        counter = req.session.name
        res.render("index", {counter: counter});
})
// post route for adding a user
app.post('/counter2', function(req, res) {
        console.log("POST DATA", req.body);
        req.session.name ++;
        res.redirect('/');
})
app.post('/reset', function(req, res) {
        console.log("POST DATA", req.body);
        console.log("Reset");
        req.session.name = 0;
        res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
        console.log("listening on port 8000");
});