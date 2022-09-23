const Posts = require('../models/post.model');

exports.createPost = async (req, res, next) => {
    try {
        const  { title, tags, content, user_id = '632d88d871969c633be2f7e8'  } = req.body;
        // return console.log('req.body', req.body);
        const allUsers = await Posts.create({
            title, tags, content, user_id
        });
        // console.log('allUsers', allUsers)
        res.status(200).send({
            success: true,
            data: allUsers
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message || `shit happens that's code`
        })
    }
}

exports.getAllPosts = async (req, res, next) => {
    try {
        const  { title, tags, content  } = req.body;
        // return console.log('req.body', req.body);
        const getAllPosts = await Posts.find().populate('users');
        // console.log('allUsers', allUsers)
        res.status(200).send({
            success: true,
            data: getAllPosts
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message || `shit happens that's code`
        })
        return next(error);
    }
}
