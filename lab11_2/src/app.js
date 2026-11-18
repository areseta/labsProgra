import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/index.js';

// Cargar las variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Definir los middleware
app.use( express.json() );

// Ruta base para llegar a las APis
app.use( '/api/v1', mainRouter)

// MAnejar errores
app.use( (req, res) => {
    res.status(404).json( { msg: "Ruta no existe !! "});
})


// INiciar el server
app.listen( PORT, () => {
    console.log(`Servidor iniciado en PORT ${PORT}`);
})