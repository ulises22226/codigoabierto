const { Router } = require('express');
const { check } = require('express-validator');
const { getPagos, crearPagos, actualizarPagos, eliminarPagos } = require('../controllers/pagos.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');

const router = Router();

router.get('/', getPagos);
router.post('/', [
    check('Conexion', 'el numero de conexion es necesaria').not().isEmpty(),
    check('Periodo', 'el periodo es necesario').not().isEmpty(),
    validarCampos
], crearPagos);
router.put('/:id', actualizarPagos);
router.delete('/:id', eliminarPagos);


module.exports = router;