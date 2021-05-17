const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({

    message: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    imageID: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Posts', PostSchema);
