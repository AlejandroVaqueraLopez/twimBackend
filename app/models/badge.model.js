const mongoose = require('mongoose');
const Badge = mongoose.model(
    "Badge",
    new mongoose.Schema({
      name: {
          type: String,
          required: false,
      },
      description: {
          type: String,
          required: false,
      },
      imageurl: {
          type: String,
          required: false,
      }
    },{timestamps: true})
);

module.exports = Badge;