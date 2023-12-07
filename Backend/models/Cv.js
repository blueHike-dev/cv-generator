const mongoose = require("mongoose");

const CvSchema = new mongoose.Schema({
  fullName: String,
  email: String,
});

module.exports = mongoose.model("Cv", CvSchema);
