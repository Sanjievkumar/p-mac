import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';

async function perfectExtract() {
  const img = await loadImage('public/images/consultancy/hero-machine-enhanced.jpg');
  const width = img.width;
  const height = img.height;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;

  let removedPixels = 0;
  
  // Very strict tolerance for PURE white
  const tolerance = 4; // R, G, B must be > 250

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i+1];
    const b = data[i+2];

    if (r > 255 - tolerance && g > 255 - tolerance && b > 255 - tolerance) {
      data[i+3] = 0; // Make transparent
      removedPixels++;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('public/images/consultancy/hero-machine-strict-extract.png', buffer);
  console.log(`Extracted ${removedPixels} pure white pixels.`);
}

perfectExtract().catch(console.error);
