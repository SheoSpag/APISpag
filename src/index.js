const express = require('express')
const v1Router = require('./v1/routes/Objeto/objetoRutas')
const v2Router = require('./v2/routes/Objeto/objetoRutas')

const app = express()

const PORT = process.env.PORT || 3030;

app.use(express.json())
app.use("/api/v1/objetos", v1Router)
//app.use("/api/v2/objetos", v2Router)

app.listen(PORT, () =>  {
    console.log(`Se esta escuchando en el puerto ${PORT}`);
})

 