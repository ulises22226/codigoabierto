const { Router } = require('express');
const { check } = require('express-validator');
const { getTest3, crearTest3, eliminarTest3, actualizarTest3 } = require('../controllers/prueba3controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');

const router = Router();

router.get('/', getTest3);
router.post('/', crearTest3);
router.put('/id', [
        check('campo3', 'debe de ser obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarTest3);
router.delete('/id', [
    check('campo3', 'debe de ser obligatorio').not().isEmpty(),
    validarCampos
], eliminarTest3);

module.exports = router;