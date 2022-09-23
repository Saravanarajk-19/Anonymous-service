module.exports = (app) => {
    const tag = require('../controller/tag.controller');
    const router = require('express').Router();

    router.get('/get-all-tags', tag.getAllTags);

    router.post('/create-tag', tag.createTag);

    app.use('/api/v1/tag', router);
}