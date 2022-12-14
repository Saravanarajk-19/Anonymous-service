module.exports = (app) => {
    const post = require('../controller/post.controller');
    const router = require('express').Router();

    router.get('/get-all-posts', post.getAllPosts);

    router.post('/create-post', post.createPost);

    router.get('/get/:id', post.getOnePost);

    router.put('/update-post/:id', post.updatePostComment);

    app.use('/api/v1/post', router);
}
