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
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('users', userSchema);

module.exports = User;
