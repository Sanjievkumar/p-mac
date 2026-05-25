import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';

async function processImage() {
  const inputFile = process.argv[2];
  const outputFile = process.argv[3];
  
  if (!inputFile || !outputFile) {
    console.error("Usage: node remove-bg.js <input> <output>");
    process.exit(1);
  }

  console.log(`Loading high-res AI image from ${inputFile}...`);
  const img = await loadImage(inputFile);
  
  const width = img.width;
  const height = img.height;
  
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  
  console.log(`Image size: ${width}x${height}`);
  
  const visited = new Uint8Array(width * height);
  const tolerance = 15; // Strict tolerance for white backgrounds
  
  // Start color is the top-left pixel
  const sr = data[0], sg = data[1], sb = data[2];
  
  function colorMatch(idx) {
    return Math.abs(data[idx] - sr) <= tolerance &&
           Math.abs(data[idx+1] - sg) <= tolerance &&
           Math.abs(data[idx+2] - sb) <= tolerance;
  }
  
  // Start flood fill from multiple corners to ensure full coverage
  const seeds = [
    {x: 0, y: 0},
    {x: width - 1, y: 0},
    {x: 0, y: height - 1},
    {x: width - 1, y: height - 1}
  ];
  
  const queue = [...seeds];
  for (const s of seeds) {
    visited[s.y * width + s.x] = 1;
  }
  
  let pixelsProcessed = 0;
  console.log('Running flood-fill transparency...');
  
  while(queue.length > 0) {
    const {x, y} = queue.pop();
    const idx = (y * width + x) * 4;
    
    // Set to transparent
    data[idx + 3] = 0;
    pixelsProcessed++;
    
    // Check neighbors
    const neighbors = [
      {x: x+1, y: y}, {x: x-1, y: y},
      {x: x, y: y+1}, {x: x, y: y-1}
    ];
    
    for (const n of neighbors) {
      if (n.x >= 0 && n.x < width && n.y >= 0 && n.y < height) {
        const pIdx = n.y * width + n.x;
        if (visited[pIdx] === 0) {
          visited[pIdx] = 1;
          const dataIdx = pIdx * 4;
          if (colorMatch(dataIdx)) {
            queue.push(n);
          }
        }
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  console.log(`Removed ${pixelsProcessed} pixels.`);
  console.log(`Saving true transparent 8k PNG to ${outputFile}...`);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputFile, buffer);
  console.log('Done!');
}

processImage().catch(console.error);
