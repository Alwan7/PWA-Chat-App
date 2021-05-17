const mongoose = require("mongoose");

const imagesSchema = mongoose.Schema({
  createdBy: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Image = mongoose.model("Image", imagesSchema);

module.exports = Image;
