const mongoose = require('mongoose');
const Config = mongoose.model(
    "Config",
    new mongoose.Schema({
      name: {
          type: String,
          required: false,
      },
      information: {
          type: String,
          required: false,
      }
    },{timestamps: true})
);

module.exports = Config;