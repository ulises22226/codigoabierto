const { Router } = require('express');
const { check } = require('express-validator');
const { getBarrio, crearBarrio, actualizarBarrio, eliminarBarrio, getBarrioById } = require('../controllers/barrio.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');


const router = Router();


router.get('/', getBarrio);
router.get('/:id', getBarrioById);
router.post('/', [
        check('Nombre', 'el nombre es obligatorio').not().isEmpty(),
        check('NumeroResolucion', 'el numero de resolucion es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    crearBarrio);
router.put('/:id', [
    check('Nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('NumeroResolucion', 'el numero de resolucion es obligatorio').not().isEmpty(),
    validarCampos,
], actualizarBarrio);
router.delete('/:id', eliminarBarrio);


module.exports = router;