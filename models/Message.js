//Database model for messages

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("user", UserSchema);
