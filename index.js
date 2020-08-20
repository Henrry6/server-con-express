'use strict'

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.set('json spaces',2);
const port = process.env.PORT || 3002

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.get('/inicio', (req, res) => {
    res.send({ menssage: 'Holi'})
})
app.get("/products", (req,res) => {
    const data = {
        valor1: 2,
        valor2: 20,
        valor3: 40,
        valor4: 50,
        name1 : "Henrry",
        name2: "David",
        lastname1: "ALAVARDO",
        lastname2: "MALES",
        favoritColor: "Black"
    }
    res.json(data)
 })

 //parametros de enrutamiento con id
 app.get('/products/:name1', (req, res) => {

    res.send (req.params.name1)
})

app.use('/api/ruta1', require('./routes/ruta0'))
app.use(require('./routes/ruta1'))

app.listen(port, () => {
    console.log('Bienvenido http://localhost:' + port)
})
