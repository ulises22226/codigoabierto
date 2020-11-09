const { response } = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = (req, res = response, next) => {

    // leer el token
    const token = req.header('x-token');


    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'no hay token',
        })
    }

    try {

        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        req.id = id;
        next();
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'token no valido',
        })
    }




}


module.exports = {
    validarJWT,
}