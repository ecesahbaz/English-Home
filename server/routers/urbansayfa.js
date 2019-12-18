var express = require('express')
var fs = require("fs")
var urbansayfa = express.Router()

urbansayfa.get('/', function (req, res) {
    //dosya okundu
    let data = fs.readFileSync("urban.json");
    //json formatında olduğu için objeye çevrildi
    let urban = JSON.parse(data);
    //res.send(coffee.kahveler) direk kahveleri döndürebilirsin
   
    //okunan dosya bilgileri döndürüldü.
    res.send(urban)
   
})

urbansayfa.post('/degistir', function (req, res) {
    res.send('POST - DEGİSTİR')
})

module.exports = urbansayfa