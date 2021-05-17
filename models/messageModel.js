const mongoose = require('mongoose');


const messagesSchema = mongoose.Schema({
    createdBy: {
        type: String,
        required: true,
      },
      postedTime: {
          type: Date,
          default: Date.now,
      },
    text: {
        type: String,
        required: true
    },
    imageID: {
        type: String,
        required: false
    }
});

const Message = mongoose.model("Message", messagesSchema);

module.exports = Message;
