const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Route to create a new post
router.post('/create', async (req, res) => {
  const { title, body } = req.body;
  try {
    const newPost = new Post({ title, body });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
});

// Route to get all posts in reverse chronological order
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving posts", error });
  }
});

module.exports = router;
