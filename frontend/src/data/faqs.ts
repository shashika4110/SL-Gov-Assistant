import type { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: {
      en: 'What documents do I need for most government services?',
      si: 'බොහෝ රජයේ සේවා සඳහා මට අවශ්‍ය ලේඛන මොනවාද?',
      ta: 'பெரும்பாலான அரச சேவைகளுக்கு எனக்கு என்ன ஆவணங்கள் தேவை?',
    },
    answer: {
      en: 'Most government services require your National Identity Card (NIC) as primary identification. Additional documents vary by service — typically birth certificates, proof of address, and passport-size photographs. Always check the specific service requirements before visiting an office.',
      si: 'බොහෝ රජයේ සේවා සඳහා ඔබේ ජාතික හැඳුනුම්පත (NIC) ප්‍රධාන හඳුනාගැනීම ලෙස අවශ්‍ය වේ. අමතර ලේඛන සේවාව අනුව වෙනස් වේ — සාමාන්‍යයෙන් උපතේ සහතික, ලිපින සනාථ කිරීම සහ ගමන් බලපත්‍ර ප්‍රමාණයේ ඡායාරූප.',
      ta: 'பெரும்பாலான அரச சேவைகளுக்கு உங்கள் தேசிய அடையாள அட்டை (NIC) முதன்மை அடையாளமாக தேவை. கூடுதல் ஆவணங்கள் சேவையைப் பொறுத்து மாறுபடும் — பொதுவாக பிறப்பு சான்றிதழ், முகவரி சான்று மற்றும் கடவுச்சீட்டு அளவு புகைப்படங்கள்.',
    },
  },
  {
    id: 'faq-2',
    category: 'passport',
    question: {
      en: 'How long does it take to get a passport in Sri Lanka?',
      si: 'ශ්‍රී ලංකාවේ ගමන් බලපත්‍රයක් ලබා ගැනීමට කොපමණ කාලයක් ගතවේද?',
      ta: 'இலங்கையில் கடவுச்சீடு பெற எவ்வளவு நேரம் ஆகும்?',
    },
    answer: {
      en: 'Normal passport processing takes 10–15 working days. Express service is available for 3–5 working days with an additional fee. Processing times may vary during peak seasons.',
      si: 'සාමාන්‍ය ගමන් බලපත්‍ර සැකසීම වැඩ කරන දින 10–15ක් ගතවේ. Express සේවාව අමතර ගාස්තුවකින් වැඩ කරන දින 3–5ක් සඳහා ලබා ගත හැක.',
      ta: 'சாதாரண கடவுச்சீடு செயலாக்கம் 10–15 வேலை நாட்கள் ஆகும். Express சேவை கூடுதல் கட்டணத்துடன் 3–5 வேலை நாட்களில் கிடைக்கும்.',
    },
  },
  {
    id: 'faq-3',
    category: 'nic',
    question: {
      en: 'Can I apply for a NIC online?',
      si: 'මට NIC අන්තර්ජාලයෙන් අයදුම් කළ හැකිද?',
      ta: 'NIC ஆன்லைனில் விண்ணப்பிக்க முடியுமா?',
    },
    answer: {
      en: 'Currently, NIC applications require an in-person visit to the Department for Registration of Persons (DRP) office for biometric capture. Some preliminary steps may be available online — check www.drp.gov.lk for updates.',
      si: 'දැනට, NIC අයදුම් biometric capture සඳහා DRP කාර්යාලයට පුද්ගලිකව පැමිණීම අවශ්‍ය වේ. www.drp.gov.lk හි යාවත්කාලීන තොරතුරු බලන්න.',
      ta: 'தற்போது, NIC விண்ணப்பங்களுக்கு biometric capture க்கு DRP அலுவலகத்தில் personally வர வேண்டும். www.drp.gov.lk இல் updates பார்க்கவும்.',
    },
  },
  {
    id: 'faq-4',
    category: 'driving',
    question: {
      en: 'What is the minimum age for a driving licence in Sri Lanka?',
      si: 'ශ්‍රී ලංකාවේ රියදුරු බලපත්‍රයක් සඳහා අවම වයස කීයද?',
      ta: 'இலங்கையில் ஓட்டுநர் உரிமத்திற்கு குறைந்தபட்ச வயது என்ன?',
    },
    answer: {
      en: 'The minimum age for a Class B (car) driving licence is 18 years. Motorcycle licences (Class A) can be obtained from age 16 with restrictions.',
      si: 'Class B (car) රියදුරු බලපත්‍රය සඳහා අවම වයස 18 වේ. Motorcycle licences (Class A) age 16 සිට restrictions සමඟ ලබා ගත හැක.',
      ta: 'Class B (car) ஓட்டுநர் உரிமத்திற்கு குறைந்தபட்ச வயது 18. Motorcycle licences (Class A) age 16 முதல் restrictions உடன் பெறலாம்.',
    },
  },
  {
    id: 'faq-5',
    category: 'business',
    question: {
      en: 'How do I register a new business in Sri Lanka?',
      si: 'ශ්‍රී ලංකාවේ නව ව්‍යාපාරයක් ලියාපදිංචි කරන්නේ කෙසේද?',
      ta: 'இலங்கையில் புதிய வணிகத்தை எவ்வாறு பதிவு செய்வது?',
    },
    answer: {
      en: 'Register through the eROC portal (eroc.drc.gov.lk). First, search and reserve a business name, then submit registration forms based on your business type (sole proprietorship, partnership, or company).',
      si: 'eROC portal (eroc.drc.gov.lk) හරහා register කරන්න. පළමුව business name search/reserve කර, business type අනුව registration forms submit කරන්න.',
      ta: 'eROC portal (eroc.drc.gov.lk) மூலம் register செய்யவும். முதலில் business name search/reserve செய்து, business type படி registration forms submit செய்யவும்.',
    },
  },
  {
    id: 'faq-6',
    category: 'tax',
    question: {
      en: 'Do I need a TIN if I am a salaried employee?',
      si: 'මම වැටුප් සේවකයෙක් නම් TIN අවශ්‍යද?',
      ta: 'நான் சம்பள ஊழியர் என்றால் TIN தேவையா?',
    },
    answer: {
      en: 'If your employer deducts PAYE tax, they handle TIN registration on your behalf. However, having your own TIN is recommended for filing personal tax returns and other financial transactions.',
      si: 'Employer PAYE tax deduct කරන්නේ නම්, TIN registration ඔවුන් handle කරයි. Personal tax returns සඳහා own TIN තිබීම recommend කරයි.',
      ta: 'Employer PAYE tax deduct செய்தால், TIN registration அவர்கள் handle செய்கிறார்கள். Personal tax returns க்கு own TIN வைத்திருப்பது recommend.',
    },
  },
  {
    id: 'faq-7',
    category: 'general',
    question: {
      en: 'What is the 1919 government hotline?',
      si: '1919 රජයේ hotline යනු කුමක්ද?',
      ta: '1919 அரச hotline என்றால் என்ன?',
    },
    answer: {
      en: '1919 is the Government Information Center hotline. Citizens can call for guidance on government services in Sinhala, Tamil, and English. It operates during business hours.',
      si: '1919 Government Information Center hotline. Citizens Sinhala, Tamil, English හි government services guidance සඳහා call කළ හැක.',
      ta: '1919 Government Information Center hotline. Citizens Sinhala, Tamil, English இல் government services guidance க்கு call செய்யலாம்.',
    },
  },
  {
    id: 'faq-8',
    category: 'certificates',
    question: {
      en: 'How do I get a certified copy of my birth certificate?',
      si: 'මගේ උපතේ සහතිකයේ certified copy ලබා ගන්නේ කෙසේද?',
      ta: 'எனது பிறப்பு சான்றிதழின் certified copy எப்படி பெறுவது?',
    },
    answer: {
      en: 'Visit the Divisional Secretariat or Registrar of Births office in the district where your birth was registered. Bring your NIC and fill out the application form. Fee is approximately LKR 100–500.',
      si: 'ඔබේ උපත register වූ district Divisional Secretariat/Registrar of Births කාර්යාලයට NIC රැගෙන application form පුරවන්න. Fee LKR 100–500.',
      ta: 'உங்கள் பிறப்பு register ஆன district Divisional Secretariat/Registrar of Births அலுவலகத்திற்கு NIC உடன் application form நிரப்பவும். Fee LKR 100–500.',
    },
  },
];

export function searchFAQs(query: string): FAQ[] {
  const q = query.toLowerCase().trim();
  if (!q) return faqs;
  return faqs.filter(
    (f) =>
      f.question.en.toLowerCase().includes(q) ||
      f.question.si.includes(q) ||
      f.question.ta.includes(q) ||
      f.answer.en.toLowerCase().includes(q)
  );
}
