var express = require('express');
var path = require('path');

var app = express();
app.set('views engine','ejs');

app.get('/',(req,res)=>{
	res.render('metroIndex.ejs');
});

app.get('/login',(req,res)=>{
	res.render('metroLogin.ejs');

});

app.get('/search',(req,res)=>{
	res.render('metroIndex.ejs');
  
});

app.get('/fare',(req,res)=>{
	res.render('metroIndex.ejs');
  
});

app.get('/timetable',(req,res)=>{
	res.render('metroTimetable.ejs');
  
});

app.listen(8080, ()=> console.log('listening at 8080'));