const Posts = require('../models/post.model');
const User = require('../models/user.model');

exports.createPost = async (req, res, next) => {
    try {
        const  { title, tags, content, user_id = '632d8b3f1b4c32fd0dbea335'  } = req.body;
        const createPost = await Posts.create({
            title, tags, content, user_id
        });
        console.log('createPost', createPost)
        const user = await User.findById({_id: createPost.user_id});
        user.post.push(createPost);
        await user.save();
        res.status(200).send({
            success: true,
            data: createPost
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
        const getAllPosts = await Posts.find().populate('user_id');
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

exports.getOnePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const postData = await Posts.findById({ _id: id}).populate('user_id');
        res.status(200).send({
            success: true,
            data: postData
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message || `shit happens that's code`
        })
        return next(error);
    }
}
