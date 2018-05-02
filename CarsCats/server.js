var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + "/views");
app.set("view engine", "ejs");

app.listen(8000, function(){
        console.log("listening on port 8000")
})
app.get("/cars", function(request, response){
        response.render('cars');
})
app.get("/cats", function(request, response){
        response.render('cats');
})
app.get("/cars/new", function(request, response){
        response.render('new');
})
app.get("/balloon", function(request, response){
        var balloon_array = [
                {name: "Balloon"},
                {favfood: "Oreos"},
                {age: "3"},
                {sleepingspots: ["in the air", "under the sun"]}
        ]
        response.render('balloon', {balloon: balloon_array})
})
app.get("/straightkilla", function(request, response){
        var killa_array = [
                {name: "Straight Killa"},
                {favfood: "Mice"},
                {age: "5"},
                {sleepingspots: ["anywhere", "barn", "field"]}
        ]
        response.render('straightkilla', {killa: killa_array})
})
app.get("/thugcat", function(request, response){
        var thug_array = [
                {name: "Thug Cat"},
                {favfood: "Ducks"},
                {age: "4"},
                {sleepingspots: ["benches", "gun range", "gunstore", "floor"]}
        ]
        response.render('thugcat', {thug: thug_array})
})