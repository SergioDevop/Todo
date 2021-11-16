const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')

const app = express()
const facturas = new Array()
const productos = [
    {id: 1, nombre: 'Papel', precioUnitario: 30.50},
    {id: 2, nombre: 'Cuaderno', precioUnitario: 50.00},
    {id: 3, nombre: 'Pintura', precioUnitario: 60.00},
    {id: 4, nombre: 'Caja de Clips', precioUnitario: 5.50},
    {id: 5, nombre: 'Cartulina', precioUnitario: 2.00}
]
const clientes = [
    {nit: '1234567', nombre: 'Juan Perez'},
    {nit: '7654354', nombre: 'Roberto Flores'}
]
const facturacion = fs.readFileSync('facturacion.html')
const jsonParser = bodyParser.json()

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(facturacion)
})

app.get('/clientes/:nit', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    let clienteEncontrado = null

    for (cliente of clientes) {
        if (cliente.nit == req.params.nit) {
            clienteEncontrado = cliente
            break
        }
    }

    return res.end(JSON.stringify(clienteEncontrado))
})

app.get('/productos', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(productos))
})

app.get('/productos/:id', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(productos[req.params.id]))
})

app.get('/facturas/:id', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(facturas[req.params.id]))
})

app.post('/facturas', jsonParser, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    let factura = req.body

    factura.id = facturas.length
    facturas.push(factura)

    res.end(factura.id.toString())
})

app.listen(3000)
