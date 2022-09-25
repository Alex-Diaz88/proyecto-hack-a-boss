const newUser = require('./newUser');
const loginUser = require('./loginUser');
const activeUser = require('./activeUser');
const getUser = require('./getUser');
const editUser = require('./editUser');
const editUserPassword = require('./editUserPassword');
const editUserAvatar = require('./editUserAvatar');
const deleteUser = require('./deleteUser');

module.exports = {
    newUser,
    loginUser,
    activeUser,
    getUser,
    editUser,
    editUserPassword,
    editUserAvatar,
    deleteUser,
};
