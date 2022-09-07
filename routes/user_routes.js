const express = require('express');
const {findAllUsers, findUsersById, addUsers, updateUsersById, changeStatusUsers} = require('../controllers/user_controller');
const routes = express.Router();

routes.get('/', findAllUsers);
routes.get('/:id', findUsersById);
routes.post('/', addUsers);
routes.put('/:id', updateUsersById);
routes.delete('/:id', changeStatusUsers);

module.exports = routes;