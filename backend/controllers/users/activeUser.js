const getDB = require('../../db/getDB');

const activeUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();
        const { username } = req.body;

        console.log(username);

        await connection.query(
            `update user set active = ? where username = ?`,
            [true, username]
        );

        res.send({
            status: 'Ok',
            message: 'Usuario activado con éxito.',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = activeUser;
