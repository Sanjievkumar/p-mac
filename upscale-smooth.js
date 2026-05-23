import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';

async function upscaleAndSmooth() {
  console.log('Loading user exact remove.bg image...');
  const img = await loadImage('public/images/consultancy/hero-machine-new.png-removebg-preview.png');
  
  // Upscale by 4x
  const scale = 4;
  const width = img.width * scale;
  const height = img.height * scale;
  
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Enable high-quality smoothing to eliminate pixelation blocks
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  
  // Draw scaled image
  ctx.drawImage(img, 0, 0, width, height);
  
  // Apply a very mild sharpen convolution to recover edge crispness
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;
  
  // Simple unsharp mask or laplacian would be complex to implement perfectly in pure JS without artifacts.
  // The high-quality smoothing is usually enough to remove "pixel blocks".
  // We'll leave it at high-quality bicubic smoothing which turns blocks into smooth gradients.
  
  console.log(`Upscaled to ${width}x${height} with high-quality smoothing.`);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('public/images/consultancy/hero-machine-smooth.png', buffer);
  console.log('Done!');
}

upscaleAndSmooth().catch(console.error);
