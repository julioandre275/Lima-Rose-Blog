var express = require("express");
var app = express();
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/halimas_blog", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.get("/",function(req,res){
    res.render("homepage");
});
app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Server is Running")
})
    
