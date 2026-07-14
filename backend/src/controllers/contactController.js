import { contacts, officialLinks } from '../data/contactsData.js';

export const listContacts = (_req, res) => {
  res.json({ success: true, data: { contacts, officialLinks } });
};

export const listEmergencyContacts = (_req, res) => {
  res.json({
    success: true,
    data: { contacts: contacts.filter((c) => c.isEmergency) },
  });
};
