var express = require('express')
var fs = require("fs")
var ufiltre = express.Router()

ufiltre.get('/', function (req, res) {
    //dosya okundu
    let data = fs.readFileSync("urbanfiltre.json");
    //json formatında olduğu için objeye çevrildi
    let urbanfiltre = JSON.parse(data);
 
   
    //okunan dosya bilgileri döndürüldü.
    res.send(urbanfiltre)
   
})

ufiltre.post('/degistir', function (req, res) {
    res.send('POST - DEGİSTİR')
})

module.exports = ufiltre