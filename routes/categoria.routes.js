const { Router } = require('express');
const { check } = require('express-validator');
const { getCategorias, crearCategoria, actualizarCategoria, eliminarCategoria, getCategoriasById } = require('../controllers/categoria.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');


const router = Router();

router.get('/', getCategorias);
router.get('/:id', getCategoriasById);
router.post('/', [
    check('Categoria', 'la categoria debe  de esta').not().isEmpty(),
    check('Descripcion', 'la descripcion debe  de esta').not().isEmpty(),
    validarCampos
], crearCategoria);
router.put('/:id', [
    check('Categoria', 'la categoria debe  de esta').not().isEmpty(),
    check('Descripcion', 'la descripcion debe  de esta').not().isEmpty(),
    validarCampos
], actualizarCategoria);
router.delete('/:id', eliminarCategoria);













module.exports = router;