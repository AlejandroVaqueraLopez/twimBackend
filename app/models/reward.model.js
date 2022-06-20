const mongoose = require('mongoose');
const Reward = mongoose.model(
    "Reward",
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

module.exports = Reward;