const { Router } = require('express');
const { check } = require('express-validator');
const { getPeriodo, crearPeriodo, actualizarPeriodo, eliminarPeriodo, getPeriodoById } = require('../controllers/periodo.controllers')
const { validarCampos } = require('../middlewares/validar-campos.middlewares');

const router = Router();



router.get('/', getPeriodo);
router.get('/:id', getPeriodoById)
router.post('/', [
    check('Periodo', 'El periodo es necesario').not().isEmpty(),
    check('Descripcion', 'La descripcion es necesaria').not().isEmpty(),
    validarCampos
], crearPeriodo);
router.put('/:id', [
    check('Periodo', 'El periodo es necesario').not().isEmpty(),
    check('Descripcion', 'La descripcion es necesaria').not().isEmpty(),
    validarCampos
], actualizarPeriodo);
router.delete('/:id', eliminarPeriodo);




module.exports = router;