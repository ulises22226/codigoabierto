const { Router } = require('express');
const { check } = require('express-validator');
const { getUsuario, crearUsuario, actualizarUsurio, eliminarUsuario } = require('../controllers/user.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');
const { validarJWT } = require('../middlewares/validar-jwt.middlewares');


const router = Router();


router.get('/', validarJWT, getUsuario);
router.post('/', [
    validarJWT,
    check('User', 'el nombre del usuario es necesario').not().isEmpty(),
    check('Password', 'el password es necesario').not().isEmpty(),
    check('UserRole', 'el role del usuario es necesario').not().isEmpty(),
    validarCampos
], crearUsuario);
router.put('/:id', [
    validarJWT,
    check('User', 'el nombre del usuario es necesario').not().isEmpty(),
    check('Password', 'el password es necesario').not().isEmpty(),
    check('UserRole', 'el role del usuario es necesario').not().isEmpty(),
    validarCampos
], actualizarUsurio);
router.delete('/:id', validarJWT, eliminarUsuario);









module.exports = router;