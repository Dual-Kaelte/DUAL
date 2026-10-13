/* Optional maintenance command. Hosting uses the already generated CSS file. */
const fs = require('node:fs');
const path = require('node:path');
const CleanCSS = require('clean-css');
const root = path.resolve(__dirname, '..');
const result = new CleanCSS({ level: 1 }).minify(fs.readFileSync(path.join(root, 'css/style.css'), 'utf8'));
if (result.errors.length) throw new Error(result.errors.join('\n'));
fs.writeFileSync(path.join(root, 'css/style.min.css'), result.styles + '\n');
console.log('Stylesheet generated: ' + result.stats.originalSize + ' → ' + result.stats.minifiedSize + ' bytes');
