const { Router } = require('express');
const { check } = require('express-validator');
const { GetConexion, crearConexion, actualizarConexion, eliminarConexion, GetConexionById } = require('../controllers/conexion.controllers');

const { validarCampos } = require('../middlewares/validar-campos.middlewares');

const router = Router();

router.get('/', GetConexion);
router.get('/:id', GetConexionById)
router.post('/', [
    check('NumeroConexion', 'El numero de conexion es obligatorio').not().isEmpty(),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('DNI', 'El DNI es obligatorio').not().isEmpty(),
    check('Barrio', 'El barrio es obligatorio').not().isEmpty(),
    check('Categoria', 'La categoria es obligatoria').not().isEmpty(),
    validarCampos
], crearConexion);
router.put('/:id', [
    check('NumeroConexion', 'El numero de conexion es obligatorio').not().isEmpty(),
    check('Nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('DNI', 'El DNI es obligatorio').not().isEmpty(),
    check('Barrio', 'El barrio es obligatorio').not().isEmpty(),
    validarCampos
], actualizarConexion);
router.delete('/:id', eliminarConexion);


module.exports = router;