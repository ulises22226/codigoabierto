const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');

const router = Router();



router.post('/', [
    check('User', 'el usuario es necesario').not().isEmpty(),
    check('Password', 'el password es necesario').not().isEmpty(),
    validarCampos
], login);



module.exports = router;