const Cv = require("../models/Cv");
const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
  const { fullName, email, image } = req.body;
  const cvData = {
    fullName,
    email,
    image,
  };

  const newCv = new Cv(cvData);

  try {
    const createdCV = await newCv.save();
    res.status(201).json(createdCV);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
