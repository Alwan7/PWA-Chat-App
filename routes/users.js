// Number 18 Require all this
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// Number 19 Require User Model for UPDATE DELETE and GET Methods
const User = require('../models/User');


// OPS: befor using this Create Request in Insomnia or Postman 


// Number 20 Update User whit :id
router.put('/:id', async(req, res) => {

    // Check the uer if equal using params.id or body.isAdmin 
    // then you can update your password using bcrypt.hash

    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            // Wait until you get new password 
            await User.findByIdAndUpdate(req.params.id, {$set: req.body});
            res.status(200).json('Account has been updated');
        } catch (err) {
            return res.status(500).json(err);
        }
    }else{
        // if users id NOT equal params.id or body.isAdmin so you can not change any body's password 
        return res.status(403).json('You can update only your account')
    }
})


// Number 21 Delete User its same Update but ve using findByIdAndDelete to delete 
router.delete('/:id', async(req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('Account has been deleted')
        } catch (err) {
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json('You can delete only your account')
    }
})

// Number 22 Get a User using findById
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc  // _doc is a object to create new User withot passwor and update find a user
        res.status(200).json(other);
        
    } catch (err) {
        return res.status(500).json(err);
    }
})

// Number 23 follow a user
router.put('/:id/follow', async(req, res) => {
    // Check if the user is not same so you can follow any body
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {followings: req.body.id}});

                res.status(200).json('User has been followed');
            }else{
                res.status(403).json('you allready follow this user')
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        // Else if User id is the same id so its mean you can not follow yourself
        return res.status(430).json('You can not follow yourself');
    }
});


// Number 24 unfollow a user
router.put('/:id/unfollow', async(req, res) => {
    // Check if the user is not same so you can follow any body
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {followings: req.body.id}});

                res.status(200).json('User has been unfollowed');
            }else{
                res.status(403).json('you dont unfollow this user')
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        // Else if User id is the same id so its mean you can not follow yourself
        return res.status(430).json('You can not unfollow yourself');
    }
})


module.exports = router


