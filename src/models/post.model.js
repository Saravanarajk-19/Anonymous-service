const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
    },
    comments: {
      type: [
        {
          user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
          },
          comment: {
            type: String,
          },
        },
      ],
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Posts", postSchema);

module.exports = User;
