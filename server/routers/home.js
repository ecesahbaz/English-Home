var express = require('express')
var fs = require("fs")
var home = express.Router()

home.get('/', function (req, res) {
    //dosya okundu
    let data = fs.readFileSync("data.json");
    //json formatında olduğu için objeye çevrildi
    let bilgi = JSON.parse(data);
  
   
    //okunan dosya bilgileri döndürüldü.
    res.send(bilgi)
   
})

home.post('/degistir', function (req, res) {
    res.send('POST - DEGİSTİR')
})

module.exports = home