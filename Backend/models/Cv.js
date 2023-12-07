const mongoose = require("mongoose");

const CvSchema = new mongoose.Schema({
  image: { type: String },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: String,
  address: String,
  summary: String,
  education: [
    {
      institution: String,
      degree: String,
      fieldOfStudy: String,
      startYear: Number,
      endYear: Number,
    },
  ],
  experience: [
    {
      position: String,
      company: String,
      location: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  skills: [String],
  languages: [
    {
      language: String,
      proficiency: String,
    },
  ],
  certification: [
    {
      title: String,
      issuingOrganization: String,
      date: Date,
    },
  ],
  hobbies: [String],
});

module.exports = mongoose.model("Cv", CvSchema);
