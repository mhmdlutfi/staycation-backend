const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  iamgeUrl: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Image", imageSchema);
