const mongoose = require('mongoose');
const Cid = mongoose.model(
    "Cid",
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

module.exports = Cid;