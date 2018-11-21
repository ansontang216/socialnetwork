var express = require('express');
var app = express();

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/datasets'));
app.use(express.static(__dirname + '/stylesheets'));
app.use(express.static(__dirname + '/img'));


app.get('/',function(req,res){
       
     res.sendFile(__dirname +'/index.html');

});

app.listen(8080,function(){
	console.log('ready at 8080');
})