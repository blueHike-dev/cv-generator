const PDFDocument = require("pdfkit");
const fs = "fs";
const Cv = require("../models/Cv");

async function generatePDF(cvId) {
  try {
    const cv = await Cv.findById(cvId);
    if (!cv) {
      throw new Error("CV not found");
    }

    const doc = new PDFDocument();
    const pdfFileName = `cv_${cvId}.pdf`;
    const writeStream = fs.createWriteStream("./pdfs/${pdfFileName}");

    doc.pipe(writeStream);

    //PDF CONTENT
    doc.fontSize(20).text(`CV for ${cv.fullName}`);
    doc.fontSize(12).text(`Email for ${cv.email}`);
    doc.fontSize(12).text(`Education for ${cv.education}`);
    doc.end();
    return pdfFileName;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to generate PDF");
  }
}

module.exports = { generatePDF };
