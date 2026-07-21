import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.join(__dirname, '../../../frontend/src/data/faqs.ts');
const outPath = path.join(__dirname, '../data/faqsData.js');

const src = fs.readFileSync(srcPath, 'utf8');
const match = src.match(/export const faqs[^=]*=\s*(\[[\s\S]*?\n\]);/);
if (!match) {
  console.error('Could not parse faqs.ts');
  process.exit(1);
}

const data = eval(match[1]);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `export const faqs = ${JSON.stringify(data, null, 2)};\n`);
console.log(`Exported ${data.length} FAQs to ${outPath}`);
