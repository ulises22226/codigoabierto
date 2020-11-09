const { Router } = require('express');
const { check } = require('express-validator');
const { getTest1, crearTest1, eliminarTest1, actualizarTest1 } = require('../controllers/prueba1.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');

const router = Router();

router.get('/', getTest1);
router.post('/', crearTest1);
router.put('/id', [
        check('campo1', 'debe de ser obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarTest1);
router.delete('/id', [
    check('campo1', 'debe de ser obligatorio').not().isEmpty(),
    validarCampos
], eliminarTest1);

module.exports = router;