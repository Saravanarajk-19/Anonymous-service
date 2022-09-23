const User = require('../models/user.model');

exports.getAllUsers = async (req, res, next) => {
    try {
        // console.log('1', dbConnect)
        const allUsers = await User.find();
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
        // const user = new User({
        //     user_name, email, phone_number, nick_name, designation
        // })
        // user.save().then((result) => {
        //     console.log('result', result);
        // }).catch((err) => {
        //     console.error(err);
        // }) 
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