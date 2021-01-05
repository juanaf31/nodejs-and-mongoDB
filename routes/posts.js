const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (error) {
		res.json({ message: error });
	}
});

router.post('/', async (req, res) => {
	const post = new Post({
		title: req.body.title,
		desc: req.body.desc
	});

	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
