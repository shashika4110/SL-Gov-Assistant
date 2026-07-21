import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.join(__dirname, '../../../frontend/src/data/contacts.ts');
const outPath = path.join(__dirname, '../data/contactsData.js');

const src = fs.readFileSync(srcPath, 'utf8');
const contactsMatch = src.match(/export const contacts[^=]*=\s*(\[[\s\S]*?\n\]);/);
const linksMatch = src.match(/export const officialLinks[^=]*=\s*(\[[\s\S]*?\n\]);/);

if (!contactsMatch || !linksMatch) {
  console.error('Could not parse contacts.ts');
  process.exit(1);
}

const contacts = eval(contactsMatch[1]);
const officialLinks = eval(linksMatch[1]);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(
  outPath,
  `export const contacts = ${JSON.stringify(contacts, null, 2)};\nexport const officialLinks = ${JSON.stringify(officialLinks, null, 2)};\n`
);
console.log(`Exported ${contacts.length} contacts to ${outPath}`);
