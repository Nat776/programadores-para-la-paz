const express = require('express');

const app = express();


// Ruta principal
app.get('/', (req, res) => {

    res.send('Servidor activo y funcionando');

});


// Ruta de estado del servidor
app.get('/estado', (req, res) => {

    res.json({

        estado: "Servidor funcionando",
        servicio: "API comunitaria"

    });

});


// Ejecutar servidor

app.listen(3000, () => {

    console.log("Servidor ejecutándose en puerto 3000");

});
