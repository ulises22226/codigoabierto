const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');
const { getPeriodoBusqueda, getConexionBusqueda, getBarrioBusqueda } = require('../controllers/buscar.controllers');

const router = Router();

router.get('/periodo/:periodo', getPeriodoBusqueda);
router.get('/conexion/:conexion', getConexionBusqueda);
router.get('/barrio/:barrio', getBarrioBusqueda);




module.exports = router;