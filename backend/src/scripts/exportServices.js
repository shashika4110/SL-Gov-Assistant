import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.join(__dirname, '../../../frontend/src/data/services.ts');
const outPath = path.join(__dirname, '../data/servicesData.js');

const src = fs.readFileSync(srcPath, 'utf8');
const match = src.match(/export const governmentServices[^=]*=\s*(\[[\s\S]*?\n\]);/);
if (!match) {
  console.error('Could not parse services.ts');
  process.exit(1);
}

// eslint-disable-next-line no-eval
const data = eval(match[1]);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `export const governmentServices = ${JSON.stringify(data, null, 2)};\n`);
console.log(`Exported ${data.length} services to ${outPath}`);
