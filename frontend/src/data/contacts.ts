import type { ContactInfo } from '../types';

export const contacts: ContactInfo[] = [
  {
    id: 'emergency-police',
    name: { en: 'Police Emergency', si: 'පොලිස් හදිසි', ta: 'போலீஸ் அவசரம்' },
    phone: '119',
    description: {
      en: 'Emergency police services — available 24/7 nationwide.',
      si: 'හදිසි පොලිස් සේවා — දේශය පුරා දිනපතා 24 පැය.',
      ta: 'அவசர போலீஸ் சேவை — நாடு முழுவதும் 24/7.',
    },
    isEmergency: true,
  },
  {
    id: 'emergency-ambulance',
    name: { en: 'Ambulance / Medical Emergency', si: 'ගිලන් රථ / වෛද්‍ය හදිසි', ta: 'ஆம்புலன்ஸ் / மருத்துவ அவசரம்' },
    phone: '1990',
    description: {
      en: 'Suwa Seriya ambulance service — free emergency medical transport.',
      si: 'සුව සේරියා ගිලන් රථ සේවාව — නොමිලේ හදිසි වෛද්‍ය ප්‍රවාහනය.',
      ta: 'சுவ சேரியா ஆம்புலன்ஸ் சேவை — இலவச அவசர மருத்துவ போக்குவரத்து.',
    },
    isEmergency: true,
  },
  {
    id: 'gov-info',
    name: {
      en: 'Government Information Center',
      si: 'රජයේ තොරතුරු මධ්‍යස්ථානය',
      ta: 'அரச தகவல் மையம்',
    },
    phone: '1919',
    description: {
      en: 'General government service inquiries in Sinhala, Tamil, and English.',
      si: 'සිංහල, දෙමළ සහ ඉංග්‍රීසි භාෂාවෙන් රජයේ සේවා පිළිබඳ තොරතුරු.',
      ta: 'சிங்களம், தமிழ் மற்றும் ஆங்கிலத்தில் அரச சேவை விசாரணைகள்.',
    },
  },
  {
    id: 'immigration',
    name: {
      en: 'Department of Immigration & Emigration',
      si: 'ජනගහන හා සංක්‍රමණ අංශය',
      ta: 'குடியேற்ற மற்றும் வெளியேற்ற துறை',
    },
    phone: '+94 11 532 9000',
    website: 'https://www.immigration.gov.lk',
    email: 'info@immigration.gov.lk',
    description: {
      en: 'Passport services, visa information, and emigration matters.',
      si: 'ගමන් බලපත්‍ර සේවා, වීසා තොරතුරු සහ සංක්‍රමණ කටයුතු.',
      ta: 'கடவுச்சீட்டு சேவைகள், விசா தகவல் மற்றும் வெளியேற்ற விவகாரங்கள்.',
    },
  },
  {
    id: 'drp',
    name: {
      en: 'Department for Registration of Persons',
      si: 'පුද්ගලයින් ලියාපදිංචි කිරීමේ දෙපාර්තමේන්තුව',
      ta: 'நபர்கள் பதிவு துறை',
    },
    phone: '+94 11 286 5001',
    website: 'https://www.drp.gov.lk',
    description: {
      en: 'NIC registration, birth/death certificates, and personal registration.',
      si: 'NIC ලියාපදිංචිය, උපත/මරණ සහතික සහ පුද්ගලික ලියාපදිංචිය.',
      ta: 'NIC பதிவு, பிறப்பு/மரண சான்றிதழ்கள் மற்றும் தனிப்பட்ட பதிவு.',
    },
  },
  {
    id: 'dmt',
    name: {
      en: 'Department of Motor Traffic',
      si: 'මෝටර් රථ ගමනාගමන දෙපාර්තමේන්තුව',
      ta: 'மோட்டார் போக்குவரத்து துறை',
    },
    phone: '+94 11 255 9121',
    website: 'https://www.motortraffic.gov.lk',
    description: {
      en: 'Driving licences, vehicle registration, and road traffic matters.',
      si: 'රියදුරු බලපත්‍ර, වාහන ලියාපදිංචිය සහ මාර්ග ගමනාගමන කටයුතු.',
      ta: 'ஓட்டுநர் உரிமங்கள், வாகன பதிவு மற்றும் சாலை போக்குவரத்து விவகாரங்கள்.',
    },
  },
  {
    id: 'ird',
    name: {
      en: 'Inland Revenue Department',
      si: 'ආයාත අධිකාරිය',
      ta: 'உள்நாட்டு வருவாய் துறை',
    },
    phone: '+94 11 213 5227',
    website: 'https://www.ird.gov.lk',
    description: {
      en: 'Tax registration (TIN), VAT, and income tax matters.',
      si: 'බදු ලියාපදිංචිය (TIN), VAT සහ ආදායම් බදු කටයුතු.',
      ta: 'வரி பதிவு (TIN), VAT மற்றும் வருமான வரி விவகாரங்கள்.',
    },
  },
  {
    id: 'roc',
    name: {
      en: 'Registrar of Companies',
      si: 'සමාගම් ලියාපදිංචිකාරු',
      ta: 'நிறுவனங்கள் பதிவாளர்',
    },
    phone: '+94 11 268 9210',
    website: 'https://www.drc.gov.lk',
    description: {
      en: 'Business registration, company incorporation, and corporate filings.',
      si: 'ව්‍යාපාර ලියාපදිංචිය, සමාගම් ආරම්භකරණය සහ සමාගම් ලේඛන.',
      ta: 'வணிக பதிவு, நிறுவனத் தொடக்கம் மற்றும் நிறுவன ஆவணங்கள்.',
    },
  },
  {
    id: 'rgd',
    name: {
      en: "Registrar General's Department",
      si: 'ප්‍රධාන ලියාපදිංචිකාරු දෙපාර්තමේන්තුව',
      ta: 'பதிவாளர் பொது துறை',
    },
    phone: '+94 11 288 9488',
    website: 'https://www.rgd.gov.lk',
    description: {
      en: 'Marriage, birth, and death registration certificates.',
      si: 'විවාහ, උපත සහ මරණ ලියාපදිංචි සහතික.',
      ta: 'திருமண, பிறப்பு மற்றும் மரண பதிவு சான்றிதழ்கள்.',
    },
  },
  {
    id: 'gov-portal',
    name: {
      en: 'Official Government Portal',
      si: 'නිල රජයේ ද්වාරය',
      ta: 'அதிகாரப்பூர்வ அரசு போர்டல்',
    },
    website: 'https://www.gov.lk',
    description: {
      en: 'Central portal for all Sri Lankan government services and information.',
      si: 'සියලු ශ්‍රී ලංකා රජයේ සේවා සහ තොරතුරු සඳහා මධ්‍යම ද්වාරය.',
      ta: 'அனைத்து இலங்கை அரச சேவைகள் மற்றும் தகவல்களுக்கான மைய போர்டல்.',
    },
  },
];

export const officialLinks = [
  { name: 'Gov.lk — Official Portal', url: 'https://www.gov.lk' },
  { name: 'Immigration & Emigration', url: 'https://www.immigration.gov.lk' },
  { name: 'Registration of Persons (DRP)', url: 'https://www.drp.gov.lk' },
  { name: 'Motor Traffic (DMT)', url: 'https://www.motortraffic.gov.lk' },
  { name: 'Inland Revenue (IRD)', url: 'https://www.ird.gov.lk' },
  { name: 'Registrar of Companies', url: 'https://www.drc.gov.lk' },
  { name: 'Registrar General (RGD)', url: 'https://www.rgd.gov.lk' },
  { name: 'ePassport Portal', url: 'https://www.epassport.lk' },
  { name: 'eROC Business Registration', url: 'https://eroc.drc.gov.lk' },
];
