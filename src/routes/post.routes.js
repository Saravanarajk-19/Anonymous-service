module.exports = (app) => {
    const post = require('../controller/post.controller');
    const router = require('express').Router();

    router.get('/get-all-posts', post.getAllPosts);

    router.post('/create-post', post.createPost);

    app.use('/api/v1/post', router);
}
