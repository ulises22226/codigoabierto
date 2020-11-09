const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const bodyParser = require('body-parser');

// crear servidor
const app = express();
// lectura y parseo del body
app.use(express.json());
// lector id
// const express_logger = require('express-logger-unique-req-id');
// express_logger.initializeLogger(app);
// const logger = express_logger.getLogger();
// logger.debug('Logger debug')


// configurar CORS
app.use(cors());
//Lectura y parseo del body
app.use(express.json());
// base de datos
dbConnection();


// // rutas 
app.use('/api/barrio', require('./routes/barrio.routes'));
app.use('/api/conexion', require('./routes/conexion.routes'));
app.use('/api/periodo', require('./routes/periodo.routes'));
app.use('/api/unidadtributaria', require('./routes/unidadTributaria.routes'));
app.use('/api/categoria', require('./routes/categoria.routes'));
app.use('/api/pagos', require('./routes/pagos.routes'));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/user-role', require('./routes/user-role.routes'));
app.use('/api/login', require('./routes/auth.routes'));
app.use('/api/busquedas', require('./routes/busquedas.router'));
app.use('/api/test', require('./routes/test.routes'));
app.use('/api/buscar', require('./routes/buscar.route'));
app.use('/api/prueba1', require('./routes/prueba.routes'));
app.use('/api/prueba2', require('./routes/prueba1.routes'));
app.use('/api/prueba3', require('./routes/prueba2.routes'));













app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en el puerto:' + process.env.PORT);
});