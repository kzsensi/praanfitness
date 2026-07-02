const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = ['public', 'src'];
const exts = ['.png', '.jpg', '.jpeg'];

const getAllFiles = (dir, filesList = []) => {
  if (!fs.existsSync(dir)) return filesList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, filesList);
    } else {
      if (exts.includes(path.extname(fullPath).toLowerCase())) {
        filesList.push(fullPath);
      }
    }
  }
  return filesList;
};

const processImages = async () => {
  let allFiles = [];
  targetDirs.forEach(dir => getAllFiles(dir, allFiles));

  let convertedNames = [];

  for (const file of allFiles) {
    const ext = path.extname(file);
    const webpFile = file.replace(new RegExp(`${ext}$`, 'i'), '.webp');
    console.log(`Converting ${file} to ${webpFile}...`);
    try {
      await sharp(file).webp({ quality: 80, effort: 6 }).toFile(webpFile);
      fs.unlinkSync(file);
      console.log(`Deleted ${file}`);
      
      const oldName = path.basename(file);
      const newName = path.basename(webpFile);
      convertedNames.push({ old: oldName, new: newName });
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
  
  // Now update code
  const extsToScan = ['.jsx', '.js', '.css', '.html'];
  const getAllScanFiles = (dir, filesList = []) => {
    if (!fs.existsSync(dir)) return filesList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (['node_modules', '.git', 'dist'].includes(file)) continue;
      if (fs.statSync(fullPath).isDirectory()) {
        getAllScanFiles(fullPath, filesList);
      } else {
        if (extsToScan.includes(path.extname(fullPath).toLowerCase())) {
          filesList.push(fullPath);
        }
      }
    }
    return filesList;
  };

  let scanFiles = getAllScanFiles('src');
  scanFiles.push('index.html');
  if (fs.existsSync(path.join('public', 'webflow-shared.css'))) {
    scanFiles.push(path.join('public', 'webflow-shared.css'));
  }

  for (const file of scanFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    for (const { old, new: newName } of convertedNames) {
      const regex = new RegExp(old.replace(/\./g, '\\.'), 'gi');
      newContent = newContent.replace(regex, newName);
    }
    
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Updated paths in ${file}`);
    }
  }

  console.log('Finished everything.');
};

processImages();
