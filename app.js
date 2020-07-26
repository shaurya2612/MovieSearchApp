var express= require("express");
var app= express();
app.set("view engine","ejs")
var request = require("request");
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("search");
});

app.get("/results",function(req,res){
    var search=req.query.movie;
    console.log(search);
   request("http://www.omdbapi.com/?apikey=1e4e1cf3&s="+search,function(error,response,body){
    var data=JSON.parse(body);
    console.log(data);
    res.render("results.ejs",{data:data});
    });
}); 
                      

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server has started");
});