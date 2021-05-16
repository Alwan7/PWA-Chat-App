// number 24 create a model for User Story 
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String,
    }
},
{timestamps: true}
);

// nuber 25 Export from Post file this Schema 
module.exports = mongoose.model('Post', PostSchema);