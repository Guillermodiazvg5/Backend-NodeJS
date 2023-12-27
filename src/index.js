const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productsRoutes = require('./routes/products.routes');


const app = express();

app.use(cors());                         // permite comunicar el servidor del back y el del front

app.use(morgan('dev'));

app.use(express.json());                // permite recibir objetos Json



 app.use(productsRoutes)


app.use ((err, req, res, next) => {        // manejador de errores comun para todas las funciones 

    return res.json({

        message: err.message
    })

})

app.listen(7000)
console.log('Escuchado por el puerto 7000')