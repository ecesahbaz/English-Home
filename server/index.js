var express = require('express')
var app = express()
var cors = require('cors')
var home = require("./routers/home")
var uye = require("./routers/uye")
var urbansayfa = require("./routers/urbansayfa")
var urbannsayfa = require("./routers/urbannsayfa")
var urbannnsayfa = require("./routers/urbannnsayfa")
var ufiltre = require("./routers/ufiltre")


app.use(cors())


//hangi uzantılar için hangi route objesinin kullanacağı belirtildi.
app.use("/home", home)
app.use("/uye", uye)
app.use("/urbansayfa", urbansayfa)
app.use("/urbannsayfa", urbannsayfa)
app.use("/urbannnsayfa", urbannnsayfa)
app.use("/ufiltre", ufiltre)



app.listen(7000, () => console.log("Server hazır port 7000 dinleniyor."));


