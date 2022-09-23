const Tags = require('../models/tag.model'); 

exports.getAllTags =async (req, res, next) => {
    try {
        const allUsers = await Tags.find();
        console.log('allUsers', allUsers)
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

exports.createTag = async (req, res, next) => {
    try {
        console.log('req.body', req.body);
        const { tag_name, slug } = req.body;
        const userDetail = await Tags.create({
            tag_name, slug
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
