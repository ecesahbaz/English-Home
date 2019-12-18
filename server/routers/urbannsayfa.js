var express = require('express')
var fs = require("fs")
var urbannsayfa = express.Router()

urbannsayfa.get('/', function (req, res) {
    //dosya okundu
    let data = fs.readFileSync("urbann.json");
    //json formatında olduğu için objeye çevrildi
    let urbann = JSON.parse(data);
 
   
    //okunan dosya bilgileri döndürüldü.
    res.send(urbann)
   
})

urbannsayfa.post('/degistir', function (req, res) {
    res.send('POST - DEGİSTİR')
})

module.exports = urbannsayfa