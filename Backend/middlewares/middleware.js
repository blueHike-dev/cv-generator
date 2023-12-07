const multer = require("multer");
const Cv = require("../models/Cv");

//MULTER CONFIG
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

//MIDDLEWARE FXN TO GET  A SPECIFIC CV BY ID
async function getCv(req, res, next) {
  let cv;
  try {
    cv = await Cv.findById(req.params.id);
    if (cv === null) {
      return res.status(404).json({ message: "Cv not found" });
    }
  } catch (err) {
    return res.status(500).json({ mesage: "err.message" });
  }
  res.cv = cv;
  next();
}

module.exports = { upload, getCv };
