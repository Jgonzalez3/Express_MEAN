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

        res.render("index");
})
app.get('/result', function(req, res) {
        //grab session data to render in HTML
        var survey = req.session.surveydata
        console.log(survey);
        res.render("results", {survey:survey});
})
// post route for adding a user
app.post('/survey', function(req, res) {
        //post form data here into session req.body is form data
        console.log("POST DATA", req.body);
        req.session.surveydata = req.body;        
        res.redirect('/result');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
        console.log("listening on port 8000");
});
