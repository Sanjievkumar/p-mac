import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';

async function compositeMask() {
  console.log('Loading high-res AI image (RGB)...');
  const highResImg = await loadImage('public/images/consultancy/hero-machine-enhanced.jpg');
  
  console.log('Loading low-res perfect mask (Alpha)...');
  const maskImg = await loadImage('public/images/consultancy/hero-machine-new.png-removebg-preview.png');
  
  const width = highResImg.width;
  const height = highResImg.height;
  
  console.log(`Processing at 8k resolution: ${width}x${height}`);
  
  // 1. Draw high-res image to get pixel data
  const mainCanvas = createCanvas(width, height);
  const mainCtx = mainCanvas.getContext('2d');
  mainCtx.drawImage(highResImg, 0, 0, width, height);
  const mainData = mainCtx.getImageData(0, 0, width, height);
  
  // 2. Draw low-res mask scaled up to 8k
  const maskCanvas = createCanvas(width, height);
  const maskCtx = maskCanvas.getContext('2d');
  // Use smooth scaling for the mask
  maskCtx.imageSmoothingEnabled = true;
  maskCtx.imageSmoothingQuality = 'high';
  maskCtx.drawImage(maskImg, 0, 0, width, height);
  const maskData = maskCtx.getImageData(0, 0, width, height);
  
  console.log('Applying alpha mask to high-res pixels...');
  let transparentPixels = 0;
  
  for (let i = 0; i < mainData.data.length; i += 4) {
    // Check alpha of the mask pixel
    const maskAlpha = maskData.data[i + 3];
    
    // If the mask is transparent, make the high-res pixel transparent
    // Use a threshold of 128 to create a crisp edge
    if (maskAlpha < 128) {
      mainData.data[i + 3] = 0; // Set alpha to 0
      transparentPixels++;
    } else {
      // Optional: feathering or anti-aliasing could be done here, 
      // but a sharp threshold is best to remove white fringes
      // If the pixel is near the edge, we could multiply its alpha
      mainData.data[i + 3] = maskAlpha; 
    }
  }
  
  // Put the masked data back
  mainCtx.putImageData(mainData, 0, 0);
  
  console.log(`Masked out ${transparentPixels} pixels (including inner holes).`);
  console.log('Saving final ultimate true-transparent asset...');
  
  const buffer = mainCanvas.toBuffer('image/png');
  fs.writeFileSync('public/images/consultancy/hero-machine-ultimate.png', buffer);
  
  console.log('Done!');
}

compositeMask().catch(console.error);
