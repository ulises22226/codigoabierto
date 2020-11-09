const { Router } = require('express');
const { check } = require('express-validator');
const { getTest2, crearTest2, eliminarTest2, actualizarTest2 } = require('../controllers/prueba2.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');

const router = Router();

router.get('/', getTest2);
router.post('/', crearTest2);
router.put('/id', [
        check('campo2', 'debe de ser obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarTest2);
router.delete('/id', [
    check('campo1', 'debe de ser obligatorio').not().isEmpty(),
    validarCampos
], eliminarTest2);

module.exports = router;