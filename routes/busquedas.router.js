const { Router } = require('express');
const { check } = require('express-validator');
const { getTodo } = require('../controllers/busquedas.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');

const router = Router();



// router.get('/:busqueda/:busqueda1', getTodo);
// router.get('/:conexion/:barrio/:periodo', getTodo);
// router.get('/:conexion/:periodo/:barrio', getTodo);
router.get('/:barrio/:periodo', getTodo);














module.exports = router;