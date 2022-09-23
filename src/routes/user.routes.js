module.exports = (app) => {
    const user = require('../controller/user.controller');
    const router = require('express').Router();

    router.get('/get-all-user', user.getAllUsers);

    router.post('/create-user', user.createUser);

    app.use('/api/v1/user', router);
}