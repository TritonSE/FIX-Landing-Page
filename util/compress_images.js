import sharp from 'sharp';
import fs from 'fs';

const stdin = process.openStdin();

let stdinData = '';

// Read image file paths from standard in and accumulate all of them
stdin.on('data', function (chunk) {
  stdinData += chunk;
});

// When the file paths finish being inputted, start compressing the images
stdin.on('end', async () => {
  const files = stdinData
    .split('\n')
    .map((path) => path.trim())
    .filter(
      // Only compress png images that don't already have existing avif image
      (path) => path && path.endsWith('.png') && !fs.existsSync(path.replace('png', 'avif'))
    );
  await Promise.all(
    // Convert each png to avif
    files.map((filePath) => sharp(`./${filePath}`).avif().toFile(filePath.replace('png', 'avif')))
  );
});
