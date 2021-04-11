const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String,
  },

  joinDate: {
    type: Date,
    default: Date.now
  },

  favourites: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Post'
  }

});

module.exports = mongoose.model("User", UserSchema);