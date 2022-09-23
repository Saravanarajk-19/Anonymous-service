const User = require('../models/user.model');

exports.getAllUsers = async (req, res, next) => {
    try {
        // console.log('1', dbConnect)
        const allUsers = await User.find().populate('post');
        console.log('allUsers', allUsers)
        res.status(200).send({
            success: true,
            data: allUsers
        });
    } catch(err) {
        res.status(500).send({
            success: false,
            message: err.message || `shit happens that's code`,
        })
    }
}

exports.createUser = async (req, res, next) => {
    try {
        console.log('req.body', req.body);
        const { user_name, email, phone_number, nick_name, designation } = req.body;
        const userDetail = await User.create({
            user_name, email, phone_number, nick_name, designation
        });
        res.status(200).send({
            success: true,
            data: userDetail
        })
    } catch(err) {
        res.status(500).send({
            success: false,
            message: err.message || `shit happens that's code`,
        })
    }
}

exports.getOneUser = async (req, res, next) => {
    try {
        console.log('req', req);
        const { id } = req.params;
        const userData = await User.findById({ _id: id}).populate('post');
        res.status(200).send({
            success: true,
            data: userData
        })
    } catch(err) {
        res.status(500).send({
            success: false,
            message: err.message || `shit happens that's code`,
        })
    }
}
