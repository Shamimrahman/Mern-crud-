const Post = require("../models/postMessage.js");

module.exports.getPosts = async (req, res) => {
  try {
    const PostMessages = await Post.find();

    //after get the message
    res.status(200).json(PostMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
