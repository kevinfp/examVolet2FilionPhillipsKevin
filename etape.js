const fs = require("fs");
const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID;
const app = express();
app.set('view engine', 'ejs'); // générateur de template 
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))  // pour utiliser le dossier public
app.use(bodyParser.json())  // pour traiter les données JSON


app.get('/fichier', function (req, res) {
console.log("/fichier");
   fs.readFile('public/text/collection_provinces.json', 'utf8', function(err, contents) {
   	if(err)
   	{
   		 console.log("Erreur lecture fichier")
   		 return
   	}
   	res.end(contents)
    console.log(contents);
});

})

app.get("/etape2", function(req,res){
	   fs.readFile('public/text/collection_provinces.json', 'utf8', function(err, contents) {
   	if(err)
   	{
   		 console.log("Erreur lecture fichier")
   		 return
   	}
   	
   	res.render('index.ejs', {provinces : JSON.parse(contents)})
});

})	   



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
