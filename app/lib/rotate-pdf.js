import { degrees, PDFDocument } from 'pdf-lib';

export default async function rotatePDF(file, degList) {
  const arrayBuffer = await file.arrayBuffer();

  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();

  degList.forEach((angle, idx) => {
    if (angle != 0) {
      pages[idx].setRotation(degrees(angle))
    }
  })

  const newFile = await pdfDoc.save();

  return newFile;
}
