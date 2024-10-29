require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { error } = require('console');


const app = express();
const port = process.env.PORT;


app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function(error) {});


app.use(express.static('public'));
// Rutas //funcion controlador
app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Carlos Salas',
    titulo: 'Tienda Salas'
  });
});

// Rutas //funcion controlador
app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Carlos Salas',
    titulo: 'Tienda Salas'
  });
});

// Rutas //funcion controlador
app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Carlos Salas',
    titulo: 'Tienda Salas'
  });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
