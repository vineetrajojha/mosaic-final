const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function processDirectory(directory) {
    const ObjectList = fs.readdirSync(directory);

    for (const item of ObjectList) {
        const fullPath = path.join(directory, item);
        const stat = fs.statSync(fullPath);

        // avoid gallery chunks if not extension
        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else {
            await processImage(fullPath);
        }
    }
}

async function processImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();

    // Only process images
    if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        return;
    }

    try {
        const originalSize = fs.statSync(filePath).size;
        // skip very small
        if (originalSize < 50 * 1024) return;

        const metadata = await sharp(filePath).metadata();
        const tmpPath = filePath + '.tmp' + ext;

        // Setup sharp instance
        let processor = sharp(filePath);

        if (metadata.width > 2500) {
            processor = processor.resize({ width: 2500, withoutEnlargement: true });
        }

        if (ext === '.png') {
            await processor.png({ quality: 80, compressionLevel: 8 }).toFile(tmpPath);
        } else if (ext === '.jpg' || ext === '.jpeg') {
            await processor.jpeg({ quality: 80, mozjpeg: true }).toFile(tmpPath);
        } else if (ext === '.webp') {
            await processor.webp({ quality: 80 }).toFile(tmpPath);
        }

        const newSize = fs.statSync(tmpPath).size;

        // If we actually saved space, replace the file, otherwise discard tmp
        if (newSize < originalSize) {
            fs.renameSync(tmpPath, filePath);
            console.log(`Compressed: ${path.basename(filePath)} (${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB)`);
        } else {
            fs.unlinkSync(tmpPath);
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err.message);
    }
}

console.log('Starting image compression...');
processDirectory(publicDir).then(() => {
    console.log('Finished image compression.');
});
