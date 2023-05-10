import sharp from 'sharp';
import fs from 'fs';

const stdin = process.openStdin();

let stdinData = '';

stdin.on('data', function (chunk) {
  stdinData += chunk;
});

const SUPPORTED_EXTENSIONS = ['png'];

const isSupportedExt = (path) => {
  return SUPPORTED_EXTENSIONS.findIndex((ext) => path.endsWith(ext)) > -1;
};

const CHUNK_SIZE = 5;

const makeChunks = (files, chunkSize = CHUNK_SIZE) => {
  const chunks = [[]];
  let currentChunkIdx = 0;
  for (const file of files) {
    const lastChunk = chunks[currentChunkIdx];
    if (lastChunk.length < chunkSize) {
      lastChunk.push(file);
    } else {
      chunks.push([file]);
      currentChunkIdx++;
    }
  }
  return chunks;
};

stdin.on('end', async () => {
  const files = stdinData
    .split('\n')
    .map((path) => path.trim())
    .filter((path) => !!path && isSupportedExt(path));
  const chunks = makeChunks(files);
  for (const _chunkIdx in chunks) {
    const chunkIdx = parseInt(_chunkIdx);
    const chunk = chunks[chunkIdx];
    await Promise.all(
      chunk.map((filePath) => {
        const parts = filePath.split('.');
        const ext = parts.pop();
        const strippedPath = parts.join('.');
        return ext === 'avif' || fs.existsSync(`./${strippedPath}.avif`)
          ? Promise.resolve()
          : sharp(`./${filePath}`).avif().toFile(`./${strippedPath}.avif`);
      })
    );
  }
});
