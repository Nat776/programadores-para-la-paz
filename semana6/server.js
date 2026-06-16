const express = require('express');

const app = express();


// Permite recibir datos JSON desde peticiones POST
app.use(express.json());


// Ruta de registro
app.post('/registro', (req, res) => {

    const nombre = req.body.nombre;
    const mensaje = req.body.mensaje;

    res.json({
        estado: "Datos recibidos",
        nombre: nombre,
        mensaje: mensaje
    });

});


// Ruta para registrar incidencias
app.post('/incidencia', (req, res) => {

    const tipo = req.body.tipo;
    const descripcion = req.body.descripcion;

    res.json({
        mensaje: "Incidencia registrada",
        tipo: tipo,
        descripcion: descripcion
    });

});


// Encender servidor
app.listen(3000, () => {

    console.log("Servidor ejecutándose en puerto 3000");

});
