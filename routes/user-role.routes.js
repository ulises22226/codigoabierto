const { Router } = require('express');
const { check } = require('express-validator');
const { getUserRole, crearUserRole, actualizarUserRole, eliminarUserRole } = require('../controllers/user-role.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');


const router = Router();

router.get('/', getUserRole);
router.post('/', [
    check('tipoUsuario', 'El tipo de usuario es requerido').not().isEmpty(),
    validarCampos
], crearUserRole);
router.put('/:id', [
    check('tipoUsuario', 'El tipo de usuario es requerido').not().isEmpty(),
    validarCampos
], actualizarUserRole);
router.delete('/:id', eliminarUserRole);








module.exports = router;