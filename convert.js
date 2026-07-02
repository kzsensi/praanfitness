import fs from 'fs';
import jsdom from 'jsdom';
import HTMLtoJSX from 'htmltojsx';

const { JSDOM } = jsdom;
const converter = new HTMLtoJSX({
    createClass: false,
});

const htmlFile = fs.readFileSync('index.html.bak', 'utf-8');
const dom = new JSDOM(htmlFile);
const document = dom.window.document;

// We will extract sections.
const sections = [
    { name: 'Hero', selector: '#hero-3' },
    { name: 'Workouts', selector: '.workouts-sc' },
    { name: 'Categories', selector: '.categories-sc' },
    { name: 'CategoriesMobile', selector: '.categories-mobile-sc' },
    { name: 'Rotate', selector: '.rotate-sc' },
    { name: 'Track', selector: '.track-sc' },
    { name: 'Stats', selector: '.stats-sc' },
    { name: 'Watch', selector: '.watch-sc' },
    { name: 'Reviews', selector: '.reviews-sc' },
    { name: 'Plans', selector: '.plans-sc' },
    { name: 'Cta', selector: '.cta-sc' },
    { name: 'Footer', selector: '.footer-sc' }
];

fs.mkdirSync('src/components', { recursive: true });

// Process sections
sections.forEach(sec => {
    // Note: some selectors are classes, some are IDs.
    // For classes, there might be multiple matches. The site is a single page, so it should be the first one.
    const element = document.querySelector(sec.selector);
    if (element) {
        // Convert to JSX
        const jsx = converter.convert(element.outerHTML);
        
        const fileContent = `import React from 'react';\n\nexport default function ${sec.name}() {\n    return (\n        ${jsx.trim()}\n    );\n}\n`;
        fs.writeFileSync(`src/components/${sec.name}.jsx`, fileContent);
        
        // Replace element in DOM with a placeholder so we can extract the rest later
        const placeholder = document.createElement(sec.name);
        element.replaceWith(placeholder);
    } else {
        console.log("Could not find section:", sec.name);
    }
});

// Now for the rest of the body, which contains the Header, Navigation, custom cursor, etc.
// We remove the script tags at the bottom.
const scripts = document.querySelectorAll('body > script');
scripts.forEach(s => s.remove());

// We remove the lenis and swiper scripts from the body too.
const allScripts = document.querySelectorAll('script');
allScripts.forEach(s => s.remove());

const bodyHtml = document.body.innerHTML;
// bodyHtml now has things like <Hero></Hero>. htmltojsx will convert <Hero> to <hero>. We need to preserve capitalization.
// Instead of converting the whole body via htmltojsx (which downcases custom tags), we can just manually convert the header
const headerElement = document.querySelector('.header.top');
let headerJsx = '';
if (headerElement) {
    headerJsx = converter.convert(headerElement.outerHTML);
    const headerPlaceholder = document.createElement('HeaderComp');
    headerElement.replaceWith(headerPlaceholder);
}

// Convert the custom cursor wrapper
const cursorElement = document.querySelector('.custom-cursor-wrapper');
let cursorJsx = '';
if (cursorElement) {
    cursorJsx = converter.convert(cursorElement.outerHTML);
    const cursorPlaceholder = document.createElement('CursorComp');
    cursorElement.replaceWith(cursorPlaceholder);
}

const appContent = `
import React, { useEffect } from 'react';
${sections.map(s => `import ${s.name} from './components/${s.name}';`).join('\n')}
import './index.css';
import './assets/webflow.css';

export default function App() {
    useEffect(() => {
        if (window.Webflow) {
            window.Webflow.destroy();
            window.Webflow.ready();
            window.Webflow.require('ix2').init();
        }
    }, []);

    return (
        <div className="page-wrapper">
            ${cursorJsx.trim()}
            ${headerJsx.trim()}
            ${sections.map(s => `<${s.name} />`).join('\n            ')}
        </div>
    );
}
`;

fs.writeFileSync('src/App.jsx', appContent);

// Extract the inline styles from head and append to index.css
let cssContent = fs.readFileSync('src/index.css', 'utf-8');
const styles = document.querySelectorAll('style');
styles.forEach(style => {
    cssContent += '\n' + style.innerHTML;
});
fs.writeFileSync('src/index.css', cssContent);

console.log("Extraction complete!");
