const express = require('express');

const app = express();


// Permite recibir JSON
app.use(express.json());


// Array donde se guardan los reportes
let reportes = [];


// Consultar reportes
app.get('/reportes', (req, res) => {

    res.json(reportes);

});


// Crear reportes
app.post('/reportes', (req, res) => {


    const reporte = {

        id: reportes.length + 1,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion

    };


    reportes.push(reporte);


    res.json({

        mensaje: "Reporte registrado",
        reporte: reporte

    });

});


// Iniciar servidor

app.listen(3000, () => {

    console.log("Servidor ejecutándose en puerto 3000");

});
