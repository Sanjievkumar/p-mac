import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';

async function smartExtract() {
  const img = await loadImage('public/images/consultancy/hero-machine-enhanced.jpg');
  const width = img.width;
  const height = img.height;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;

  // Find all contiguous regions of pure white
  const visited = new Uint8Array(width * height);
  
  function isWhite(i) {
    // Strictly pure white or very close
    return data[i] > 250 && data[i+1] > 250 && data[i+2] > 250;
  }

  let removedPixels = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (visited[idx]) continue;
      
      const dataIdx = idx * 4;
      if (!isWhite(dataIdx)) continue;

      // Start a flood fill for this white region
      const region = [];
      const queue = [{x, y}];
      visited[idx] = 1;
      
      let isTouchingEdge = false;
      let isInsideRackArea = false;
      let isInsideMachineArea = false;

      while (queue.length > 0) {
        const p = queue.pop();
        region.push(p);

        if (p.x === 0 || p.x === width - 1 || p.y === 0 || p.y === height - 1) {
          isTouchingEdge = true;
        }
        
        // Define rack area (roughly left side)
        if (p.x < width * 0.4) {
          isInsideRackArea = true;
        }
        
        // Define machine body area (roughly center)
        if (p.x > width * 0.4 && p.x < width * 0.8 && p.y > height * 0.2 && p.y < height * 0.8) {
          isInsideMachineArea = true;
        }

        const neighbors = [
          {x: p.x+1, y: p.y}, {x: p.x-1, y: p.y},
          {x: p.x, y: p.y+1}, {x: p.x, y: p.y-1}
        ];

        for (const n of neighbors) {
          if (n.x >= 0 && n.x < width && n.y >= 0 && n.y < height) {
            const nIdx = n.y * width + n.x;
            if (!visited[nIdx] && isWhite(nIdx * 4)) {
              visited[nIdx] = 1;
              queue.push(n);
            }
          }
        }
      }

      // Decide whether to delete this region
      // Always delete the main background (touches edge)
      let shouldDelete = false;
      if (isTouchingEdge) {
        shouldDelete = true;
      } 
      // If it's a hole inside the rack area, delete it
      else if (isInsideRackArea && !isInsideMachineArea) {
        // Only delete if it's not a tiny spec, or if it's large enough to be a hole
        if (region.length > 10) {
          shouldDelete = true;
        }
      }

      if (shouldDelete) {
        for (const p of region) {
          const pIdx = (p.y * width + p.x) * 4;
          data[pIdx + 3] = 0; // Make transparent
          removedPixels++;
        }
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('public/images/consultancy/hero-machine-final-perfect.png', buffer);
  console.log(`Extracted ${removedPixels} white background/hole pixels perfectly.`);
}

smartExtract().catch(console.error);
