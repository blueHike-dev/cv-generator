const Cv = require("../models/Cv");
const router = require("express").Router();
const { upload, getCv } = require("../middlewares/middleware");
const { generatePDF } = require("../utils/generatePDF");

//CREATE
router.post("/", async (req, res) => {
  const newCv = new Cv(req.body);
  try {
    const savedCv = await newCv.save();
    res.status(200).json(savedCv);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE A CV
router.patch("/:id", getCv, async (req, res) => {
  if (req.body.fullName != null) {
    res.cv.fullName = req.body.fullName;
  }
  try {
    const updatedCv = await res.cv.save();
    res.json(updatedCv);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  try {
    const cvs = await Cv.find();
    res.status(200).json(cvs);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET A SPECIFIC CV BY ID
router.get("/:id", getCv, async (req, res) => {
  res.json(res.cv);
});

//DELETE
router.delete("/:id", getCv, async (req, res) => {
  try {
    await res.cv.remove();
    res.status(200).json("Cv deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPLOADING CV IMAGE
router.post("/:id/upload/", upload.single("image"), getCv, async (req, res) => {
  try {
    const imagePath = req.file.path;
    await Cv.findByIdAndUpdate(req.params.id, {
      $set: { image: imagePath },
    });
    res.status(200).json({ message: "Image Uploaded Successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GENERATING PDF
router.get("/:id/generate-pdf", async (req, res) => {
  try {
    const cvId = req.params.id;
    const pdfFileName = await generatePDF(cvId);

    res.status(200).download(`./pdfs/${pdfFileName}`, "cv.pdf");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
