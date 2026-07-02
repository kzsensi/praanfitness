import fs from 'fs';

const origHtml = fs.readFileSync('index.html.bak', 'utf-8');

// Extract everything inside <head>
const headMatch = origHtml.match(/<head>([\s\S]*?)<\/head>/i);
let headContent = headMatch ? headMatch[1] : '';

// Remove the inline <style> tags from head since we moved them to index.css
headContent = headContent.replace(/<style>[\s\S]*?<\/style>/gi, '');

// Extract everything from the bottom (scripts)
// The scripts start after the </div></div> (which is the custom-cursor and page-wrapper)
// Basically all <script> tags at the end of the file.
const scriptsMatch = origHtml.match(/<script[\s\S]*<\/html>/i);
let bottomScripts = '';
if (scriptsMatch) {
    bottomScripts = scriptsMatch[0].replace(/<\/body>[\s\S]*<\/html>/i, '');
}

// Extract the html attributes
const htmlTagMatch = origHtml.match(/<html([^>]*)>/i);
const htmlAttrs = htmlTagMatch ? htmlTagMatch[1] : '';

// Extract body attributes
const bodyTagMatch = origHtml.match(/<body([^>]*)>/i);
const bodyAttrs = bodyTagMatch ? bodyTagMatch[1] : '';

const newIndexHtml = `<!DOCTYPE html>
<html ${htmlAttrs}>
<head>
  ${headContent}
</head>
<body ${bodyAttrs}>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
  ${bottomScripts}
</body>
</html>`;

fs.writeFileSync('index.html', newIndexHtml);
console.log("index.html generated");
