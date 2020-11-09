const { Router } = require('express');
const { check } = require('express-validator');
const { GetConexion } = require('../controllers/test.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');



const router = Router();


// router.get('/:prueba/:prueba1/:prueba2/:prueba3', );





router.get('/loco', GetConexion);








module.exports = router;