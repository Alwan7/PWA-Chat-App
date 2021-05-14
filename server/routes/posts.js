// Number 26 Create Route for users Posts
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

// Number 29 Create a Post 
router.post('/', async(req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (err) {
        res.status(500).json(err)
    }
});

// Number 30 Update a Post 
router.put('/:id', async(req, res) => {
    try {
        // We find User by id 
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set : req.body});
            res.status(200).json('post has been updated');
        }else{
           return res.status(403).json('You can update only your post');
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

// Number 31 Delete a Post 
router.delete('/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json('post has been deleted');
        }else{
           return res.status(403).json('You can delete only your post');
        }
    } catch (err) {
        res.status(500).json(err)
    }
});


// Number 32 Get a Post
router.get('/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err)
    }
});

// Number 33 Get all Post


router.get('/story/all', async(req, res) => {
    try {
        // We find currentUser by using findbyId and this users post by using find (currentUser._id) from model
        const userPosts = await Post.find();
        res.send(userPosts);
        // After we fined current users id and post we use promiseAll to the get all friends post
        // We use Spread or concat method to the get all friends posts in userPosts array
    } catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router