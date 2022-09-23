const mongoose = require("mongoose");

const tagSchema = mongoose.Schema(
  {
    tag_name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Tags = mongoose.model('tags', tagSchema);

module.exports = Tags;
