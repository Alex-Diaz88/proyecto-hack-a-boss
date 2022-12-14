const getDB = require('../db/getDB');
const jwt = require('jsonwebtoken');
const { generateError } = require('../helpers');
require('dotenv').config();

const isAuth = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { authorization } = req.headers;

        if (!authorization) {
            throw generateError('Falta la cabecera de autorizacion', 401);
        }

        let tokenInfo;

        try {
            tokenInfo = jwt.verify(authorization, process.env.SECRET);
        } catch (error) {
            throw generateError('No has iniciado sesion', 401);
        }

        const [user] = await connection.query(
            `select * from user where id = ?`,
            [tokenInfo.id]
        );

        if (user.length < 1) {
            throw generateError('El token no es válido', 401);
        }

        req.userAuth = tokenInfo;

        next();
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = isAuth;
