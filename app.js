

var express=require('express');

var app=express();

app.get('/',function(req,res){
res.send("Jurassic Park eco-system monito");

});


app.listen(process.env.PORT || 5000);

module.exports=app ;