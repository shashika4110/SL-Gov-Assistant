import 'dotenv/config';
import { connectDB } from '../config/db.js';
import { GovernmentOffice } from '../models/GovernmentOffice.js';

const offices = [
  {
    name: { en: 'Department of Immigration — Colombo', si: 'ජනගහන අංශය — කොළඹ', ta: 'குடியேற்ற துறை — கொழும்பு' },
    department: 'immigration',
    address: '41, Ananda Rajakaruna Mawatha, Colombo 10',
    city: 'Colombo',
    district: 'Colombo',
    phone: '+94 11 532 9000',
    website: 'https://www.immigration.gov.lk',
    location: { type: 'Point', coordinates: [79.8612, 6.9271] },
    openingHours: 'Mon–Fri 8:30 AM – 4:15 PM',
    services: ['passport', 'visa'],
  },
  {
    name: { en: 'DRP — Colombo Head Office', si: 'DRP — කොළඹ', ta: 'DRP — கொழும்பு' },
    department: 'drp',
    address: 'Maligawatta, Colombo 10',
    city: 'Colombo',
    district: 'Colombo',
    phone: '+94 11 286 5001',
    website: 'https://www.drp.gov.lk',
    location: { type: 'Point', coordinates: [79.865, 6.94] },
    services: ['nic', 'birth-certificate'],
  },
  {
    name: { en: 'Motor Traffic — Werahera', si: 'Motor Traffic — Werahera', ta: 'Motor Traffic — Werahera' },
    department: 'motor-traffic',
    address: 'Werahera, Boralesgamuwa',
    city: 'Boralesgamuwa',
    district: 'Colombo',
    phone: '+94 11 255 9121',
    website: 'https://www.motortraffic.gov.lk',
    location: { type: 'Point', coordinates: [79.888, 6.84] },
    services: ['driving-licence'],
  },
  {
    name: { en: 'Inland Revenue — Colombo', si: 'Inland Revenue — Colombo', ta: 'Inland Revenue — Colombo' },
    department: 'ird',
    address: 'Sir Chittampalam A Gardiner Mawatha, Colombo 02',
    city: 'Colombo',
    phone: '+94 11 213 5227',
    website: 'https://www.ird.gov.lk',
    location: { type: 'Point', coordinates: [79.848, 6.934] },
    services: ['tax-registration'],
  },
  {
    name: { en: 'Registrar of Companies — Colombo', si: 'Registrar of Companies — Colombo', ta: 'Registrar of Companies — Colombo' },
    department: 'companies',
    address: 'Level 12, West Tower, World Trade Center, Colombo 01',
    city: 'Colombo',
    phone: '+94 11 268 9210',
    website: 'https://www.drc.gov.lk',
    location: { type: 'Point', coordinates: [79.845, 6.9345] },
    services: ['business-registration'],
  },
  {
    name: { en: 'Registrar General — Colombo', si: 'Registrar General — Colombo', ta: 'Registrar General — Colombo' },
    department: 'rgd',
    address: 'Central Record Room, Maligawatta, Colombo 10',
    city: 'Colombo',
    phone: '+94 11 288 9488',
    website: 'https://www.rgd.gov.lk',
    location: { type: 'Point', coordinates: [79.866, 6.938] },
    services: ['marriage-certificate', 'death-certificate'],
  },
  {
    name: { en: 'Immigration — Kandy', si: 'Immigration — Kandy', ta: 'Immigration — Kandy' },
    department: 'immigration',
    address: 'Kandy Regional Office',
    city: 'Kandy',
    district: 'Kandy',
    phone: '+94 81 222 3456',
    website: 'https://www.immigration.gov.lk',
    location: { type: 'Point', coordinates: [80.6337, 7.2906] },
    services: ['passport'],
  },
];

async function seed() {
  await connectDB();
  await GovernmentOffice.deleteMany({});
  await GovernmentOffice.insertMany(offices);
  console.log(`✓ Seeded ${offices.length} government offices`);
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
