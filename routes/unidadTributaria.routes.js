const { Router } = require('express');
const { check } = require('express-validator');
const { getUnidadTributaria, crearUnidadTributaria, actualizarUnidadTributaria, eliminarUnidadTributaria, getUnidadTributariaById } = require('../controllers/unidadTributaria.controllers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');


const router = Router();






router.get('/', getUnidadTributaria);
router.get('/:id', getUnidadTributariaById);
router.post('/', [
    check('Valor', 'debe ingresar una unidad tributaria'),
    validarCampos
], crearUnidadTributaria);
router.put('/:id', [
    check('Valor', 'debe ingresar una unidad tributaria'),
    validarCampos
], actualizarUnidadTributaria);
router.delete('/:id', eliminarUnidadTributaria);





module.exports = router;