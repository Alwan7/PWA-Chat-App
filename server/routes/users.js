// Number 19 Require all this
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// Number 20 Require User Model for UPDATE DELETE and GET Methods
const User = require('../models/User');


// OPS: befor using this Create Request in Insomnia or Postman 


// Number 21 Update User whit :id
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


// Number 22 Delete User its same Update but ve using findByIdAndDelete to delete 
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

// Number 23 Get a User using findById
router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username: username });
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router


