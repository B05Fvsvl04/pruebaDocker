Archivo package.json

{
  "name": "pruebadockerviamatica",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2"
  }
}



Archivo app.js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola, esta es una prueba de Docker!')
})

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})
