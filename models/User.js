// number 6 create a model for login form to user 
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        default: ''
    },
    coverPicture:{
        type: String,
        default: ''
    },
    followers: {
        type: Array,
        default: []
    }, 
    followings: {
        type: Array,
        default: []
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    desc : {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    }, 
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }
},
{timestamps: true}
);

// nuber 7 Export from User file this Schema 
module.exports = mongoose.model('User', UserSchema);