const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    mobileNumber: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
  },{timestamps:true});
  
  const Post = mongoose.model("Post",postSchema);

  module.exports = Post;