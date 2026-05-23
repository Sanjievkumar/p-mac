const Jimp = require('jimp');

async function removeBackground() {
  console.log('Loading high-res AI image...');
  const image = await Jimp.read('public/images/consultancy/hero-machine-enhanced.jpg');
  
  // Ensure image has alpha channel
  image.rgba(true);
  
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`Image size: ${width}x${height}`);
  
  // A visited map to avoid re-checking pixels (using a simple flat array for speed)
  const visited = new Uint8Array(width * height);
  
  // Target color is white (from the top-left corner)
  const startColor = Jimp.intToRGBA(image.getPixelColor(0, 0));
  
  // Tolerance for flood fill (out of 255)
  // We want to remove pure white and slight off-white artifacts from AI generation
  const tolerance = 25; 
  
  function colorMatch(rgba) {
    return Math.abs(rgba.r - startColor.r) <= tolerance &&
           Math.abs(rgba.g - startColor.g) <= tolerance &&
           Math.abs(rgba.b - startColor.b) <= tolerance;
  }
  
  // Flood fill queue
  const queue = [{x: 0, y: 0}];
  visited[0] = 1;
  
  console.log('Running flood-fill transparency algorithm...');
  let pixelsProcessed = 0;
  
  while(queue.length > 0) {
    const {x, y} = queue.pop(); // Using pop for DFS is slightly faster in JS than shift for BFS
    
    // Set pixel to transparent
    image.setPixelColor(0x00000000, x, y);
    pixelsProcessed++;
    
    // Check neighbors
    const neighbors = [
      {x: x+1, y: y},
      {x: x-1, y: y},
      {x: x, y: y+1},
      {x: x, y: y-1}
    ];
    
    for (const n of neighbors) {
      if (n.x >= 0 && n.x < width && n.y >= 0 && n.y < height) {
        const idx = n.y * width + n.x;
        if (visited[idx] === 0) {
          visited[idx] = 1;
          const pixelColor = Jimp.intToRGBA(image.getPixelColor(n.x, n.y));
          if (colorMatch(pixelColor)) {
            queue.push(n);
          }
        }
      }
    }
  }
  
  console.log(`Made ${pixelsProcessed} pixels transparent.`);
  console.log('Saving final perfect asset...');
  await image.writeAsync('public/images/consultancy/hero-machine-ultimate.png');
  console.log('Done!');
}

removeBackground().catch(console.error);
