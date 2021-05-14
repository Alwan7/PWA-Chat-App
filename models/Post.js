// number 25 create a model for User Story 
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
    },
    likes : {
        type: Array,
        default: []
    }
},
{timestamps: true}
);

// nuber 26 Export from Post file this Schema 
module.exports = mongoose.model('Post', PostSchema);