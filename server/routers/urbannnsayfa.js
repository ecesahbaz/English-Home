var express = require('express')
var fs = require("fs")
var urbannnsayfa = express.Router()

urbannnsayfa.get('/', function (req, res) {
    //dosya okundu
    let data = fs.readFileSync("urbannn.json");
    //json formatında olduğu için objeye çevrildi
    let urbannn = JSON.parse(data);
 
   
    //okunan dosya bilgileri döndürüldü.
    res.send(urbannn)
   
})

urbannnsayfa.post('/degistir', function (req, res) {
    res.send('POST - DEGİSTİR')
})

module.exports = urbannnsayfa