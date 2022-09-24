const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone_number: {
        type: String,
    },
    nick_name: {
        type: String,
    },
    designation: {
        type: String,
    },
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Posts"
        }
    ]
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('users', userSchema);

module.exports = User;
