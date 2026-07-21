import { GovernmentOffice } from '../models/GovernmentOffice.js';
import { isDBConnected } from '../config/db.js';
import { AppError } from '../middleware/errorHandler.js';

const FALLBACK_OFFICES = [
  {
    _id: '1',
    name: { en: 'Department of Immigration — Colombo', si: 'ජනගහන අංශය — කොළඹ', ta: 'குடியேற்ற துறை — கொழும்பு' },
    department: 'immigration',
    address: '41, Ananda Rajakaruna Mawatha, Colombo 10',
    city: 'Colombo',
    phone: '+94 11 532 9000',
    website: 'https://www.immigration.gov.lk',
    location: { type: 'Point', coordinates: [79.8612, 6.9271] },
  },
  {
    _id: '2',
    name: { en: 'DRP — Colombo', si: 'DRP — කොළඹ', ta: 'DRP — கொழும்பு' },
    department: 'drp',
    address: 'Maligawatta, Colombo 10',
    city: 'Colombo',
    phone: '+94 11 286 5001',
    website: 'https://www.drp.gov.lk',
    location: { type: 'Point', coordinates: [79.865, 6.94] },
  },
  {
    _id: '3',
    name: { en: 'Department of Motor Traffic — Werahera', si: 'Motor Traffic — Werahera', ta: 'Motor Traffic — Werahera' },
    department: 'motor-traffic',
    address: 'Werahera, Boralesgamuwa',
    city: 'Colombo',
    phone: '+94 11 255 9121',
    website: 'https://www.motortraffic.gov.lk',
    location: { type: 'Point', coordinates: [79.888, 6.84] },
  },
  {
    _id: '4',
    name: { en: 'Inland Revenue — Colombo', si: 'Inland Revenue — Colombo', ta: 'Inland Revenue — Colombo' },
    department: 'ird',
    address: 'Sir Chittampalam A Gardiner Mawatha, Colombo 02',
    city: 'Colombo',
    phone: '+94 11 213 5227',
    website: 'https://www.ird.gov.lk',
    location: { type: 'Point', coordinates: [79.848, 6.934] },
  },
];

export const listOffices = async (req, res, next) => {
  try {
    const { department, city } = req.query;
    const filter = {};
    if (department) filter.department = department;
    if (city) filter.city = new RegExp(city, 'i');

    if (isDBConnected()) {
      const offices = await GovernmentOffice.find(filter).limit(50);
      if (offices.length > 0) {
        return res.json({ success: true, data: { offices } });
      }
    }

    let offices = FALLBACK_OFFICES;
    if (department) offices = offices.filter((o) => o.department === department);
    if (city) offices = offices.filter((o) => o.city.toLowerCase().includes(city.toLowerCase()));

    res.json({ success: true, data: { offices } });
  } catch (err) {
    next(err);
  }
};

export const nearbyOffices = async (req, res, next) => {
  try {
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);
    const maxDistance = parseInt(req.query.radius || '50000', 10);

    if (Number.isNaN(lat) || Number.isNaN(lng)) {
      throw new AppError('Valid lat and lng query parameters required', 400);
    }

    if (isDBConnected()) {
      const offices = await GovernmentOffice.find({
        location: {
          $near: {
            $geometry: { type: 'Point', coordinates: [lng, lat] },
            $maxDistance: maxDistance,
          },
        },
      }).limit(20);

      if (offices.length > 0) {
        return res.json({ success: true, data: { offices } });
      }
    }

    res.json({ success: true, data: { offices: FALLBACK_OFFICES } });
  } catch (err) {
    next(err);
  }
};

export const getMapsConfig = (_req, res) => {
  res.json({
    success: true,
    data: {
      apiKey: process.env.GOOGLE_MAPS_API_KEY || '',
      hasKey: Boolean(process.env.GOOGLE_MAPS_API_KEY && process.env.GOOGLE_MAPS_API_KEY !== 'your_google_maps_api_key_here'),
    },
  });
};
