import type { GovernmentService } from '../types';

export const governmentServices: GovernmentService[] = [
  {
    id: 'passport',
    icon: '🛂',
    title: {
      en: 'Passport Application',
      si: 'ගමන් බලපත්‍ර අයදුම',
      ta: 'கடவுச்சீட்டு விண்ணப்பம்',
    },
    shortDescription: {
      en: 'Apply for a new passport or renew an existing one through the Department of Immigration and Emigration.',
      si: 'ජනගහන හා සංක්‍රමණ අංශය හරහා නව ගමන් බලපත්‍රයක් අයදුම් කරන්න හෝ පවතින එකක් අලුත් කරන්න.',
      ta: 'குடியேற்ற மற்றும் வெளியேற்ற துறை மூலம் புதிய கடவுச்சீட்டு விண்ணப்பிக்கவும் அல்லது புதுப்பிக்கவும்.',
    },
    overview: {
      en: 'Sri Lankan citizens can apply for a passport through the Department of Immigration and Emigration. Applications can be submitted online via the ePassport portal or in person at designated offices in Colombo, Kandy, Matara, and other regional centers.',
      si: 'ශ්‍රී ලාංකික පුරවැසියන්ට ජනගහන හා සංක්‍රමණ අංශය හරහා ගමන් බලපත්‍රයක් අයදුම් කළ හැක. අයදුම්පත් ePassport ද්වාරය හරහා අන්තර්ජාලයෙන් හෝ කොළඹ, මහනුවර, මාතර සහ අනෙකුත් කලාපීය කාර්යාලවල පුද්ගලිකව ඉදිරිපත් කළ හැක.',
      ta: 'இலங்கை குடிமக்கள் குடியேற்ற மற்றும் வெளியேற்ற துறை மூலம் கடவுச்சீட்டு விண்ணப்பிக்கலாம். விண்ணப்பங்களை ePassport போர்டல் மூலம் ஆன்லைனில் அல்லது கொழும்பு, கandy, மாத்தறை மற்றும் பிற பிராந்திய மையங்களில் சமர்ப்பிக்கலாம்.',
    },
    requiredDocuments: [
      { en: 'Original National Identity Card (NIC)', si: 'මුල් ජාතික හැඳුනුම්පත (NIC)', ta: 'அசல் தேசிய அடையாள அட்டை (NIC)' },
      { en: 'Birth Certificate (for first-time applicants)', si: 'උපතේ සහතිකය (පළමු වරට අයදුම්කරුවන් සඳහා)', ta: 'பிறப்பு சான்றிதழ் (முதல் முறை விண்ணப்பதாரர்களுக்கு)' },
      { en: 'Previous passport (for renewal)', si: 'පෙර ගමන් බලපත්‍රය (අලුත් කිරීම සඳහා)', ta: 'முந்தைய கடவுச்சீடு (புதுப்பிப்புக்கு)' },
      { en: 'Two recent passport-size photographs (white background)', si: 'මෑතකදී ගත් ගමන් බලපත්‍ර ප්‍රමාණයේ ඡායාරූප 2ක් (සුදු පසුබිම)', ta: 'சமீபத்திய கடவுச்சீட்டு அளவு புகைப்படங்கள் 2 (வெள்ளை பின்னணி)' },
      { en: 'Proof of address (utility bill or bank statement)', si: 'ලිපිනය සනාථ කිරීම (උපයෝගිතා බිල්පත හෝ බැංකු ප්‍රකාශය)', ta: 'முகவரி சான்று (பொது பில் அல்லது வங்கி அறிக்கை)' },
    ],
    steps: [
      {
        title: { en: 'Create an Account', si: 'ගිණුමක් සාදන්න', ta: 'கணக்கு உருவாக்கவும்' },
        description: {
          en: 'Visit www.epassport.lk and register with your NIC number and email address.',
          si: 'www.epassport.lk වෙත පිවිස ඔබේ NIC අංකය සහ විද්‍යුත් තැපෑල සමඟ ලියාපදිංචි වන්න.',
          ta: 'www.epassport.lk ஐப் பார்வையிட்டு உங்கள் NIC எண் மற்றும் மின்னஞ்சலுடன் பதிவு செய்யவும்.',
        },
      },
      {
        title: { en: 'Fill Application Form', si: 'අයදුම්පත පුරවන්න', ta: 'விண்ணப்ப படிவம் நிரப்பவும்' },
        description: {
          en: 'Complete the online application form with personal details, travel history, and emergency contact information.',
          si: 'පුද්ගලික විස්තර, ගමන් ඉතිහාසය සහ හදිසි සම්බන්ධතා තොරතුරු සමඟ අන්තර්ජාල අයදුම්පත පුරවන්න.',
          ta: 'தனிப்பட்ட விவரங்கள், பயண வரலாறு மற்றும் அவசர தொடர்பு தகவல்களுடன் ஆன்லைன் விண்ணப்ப படிவத்தை நிரப்பவும்.',
        },
      },
      {
        title: { en: 'Pay the Fee', si: 'ගාස්තුව ගෙවන්න', ta: 'கட்டணம் செலுத்தவும்' },
        description: {
          en: 'Pay the applicable fee online via credit/debit card or at the bank. Standard passport fee is approximately LKR 3,500–15,000 depending on pages and urgency.',
          si: 'ණය/debit card හරහා අන්තර්ජාලයෙන් හෝ බැංකුවේ ගාස්තුව ගෙවන්න. සtandard ගමන් බලපත්‍ර ගාස්තුව පිටු සහ හදිසි බව අනුව LKR 3,500–15,000 පමණ.',
          ta: 'கிரெடிட்/டெபிட் கார்டு மூலம் ஆன்லைனில் அல்லது வங்கியில் கட்டணம் செலுத்தவும். standard கடவுச்சீட்டு கட்டணம் பக்கங்கள் மற்றும் அவசரத்தைப் பொறுத்து LKR 3,500–15,000.',
        },
      },
      {
        title: { en: 'Book Appointment', si: 'වේලාවක් වෙන්කර ගන්න', ta: 'நேரம் பதிவு செய்யவும்' },
        description: {
          en: 'Schedule an appointment at your nearest Immigration office for document verification and biometric capture.',
          si: 'ලේඛන සත්‍යාපනය සහ biometric capture සඳහා ඔබට ආසන්නතම Immigration කාර්යාලයේ appointment schedule කරන්න.',
          ta: 'ஆவண சரிபார்ப்பு மற்றும் biometric capture க்கு அருகிலுள்ள Immigration அலுவலகத்தில் appointment schedule செய்யவும்.',
        },
      },
      {
        title: { en: 'Collect Passport', si: 'ගමන් බලපත්‍රය ලබා ගන්න', ta: 'கடவுச்சீட்டு பெறவும்' },
        description: {
          en: 'Collect your passport from the designated office or opt for courier delivery where available.',
          si: 'නියම කළ කාර්යාලයෙන් ගමන් බලපත්‍රය ලබා ගන්න හෝ courier delivery තෝරන්න.',
          ta: 'நியமிக்கப்பட்ட அலுவலகத்தில் கடவுச்சீட்டு பெறவும் அல்லது courier delivery தேர்ந்தெடுக்கவும்.',
        },
      },
    ],
    processingTime: {
      en: 'Normal processing: 10–15 working days. Express service: 3–5 working days (additional fee applies).',
      si: 'සාමාන්‍ය සැකසීම: වැඩ කරන දින 10–15. Express සේවාව: වැඩ කරන දින 3–5 (අමතර ගාස්තුව).',
      ta: 'சாதாரண செயலாக்கம்: 10–15 வேலை நாட்கள். Express சேவை: 3–5 வேலை நாட்கள் (கூடுதல் கட்டணம்).',
    },
    importantNotes: [
      { en: 'Passport must be valid for at least 6 months for most international travel.', si: 'බොහෝ ජාත්‍යන්තර ගමන් සඳහා ගමන් බලපත්‍රය අවම වශයෙන් මාස 6ක් වලංගු විය යුය.', ta: 'பெரும்பாலான சர்வதேச பயணங்களுக்கு கடவுச்சீடு குறைந்தது 6 மாதங்கள் செல்லுபடியாக வேண்டும்.' },
      { en: 'Damaged or lost passports must be reported immediately to the police and Immigration Department.', si: 'හානි වූ හෝ නැති වූ ගමන් බලපත්‍ර police සහ Immigration Department වෙත වහාම වාර්තා කළ යුතුය.', ta: 'சேதமடைந்த அல்லது தொலைந்த கடவுச்சீடுகளை உடனடியாக police மற்றும் Immigration Department க்கு தெரிவிக்க வேண்டும்.' },
    ],
    officialLink: 'https://www.immigration.gov.lk',
    keywords: ['passport', 'epassport', 'travel', 'immigration', 'ගමන් බලපත්‍ර', 'கடவுச்சீடு'],
  },
  {
    id: 'nic',
    icon: '🪪',
    title: {
      en: 'National Identity Card (NIC)',
      si: 'ජාතික හැඳුනුම්පත (NIC)',
      ta: 'தேசிய அடையாள அட்டை (NIC)',
    },
    shortDescription: {
      en: 'Apply for a new NIC, renewal, or replacement through the Department for Registration of Persons.',
      si: 'පුද්ගලයින් ලියාපදිංචි කිරීමේ දෙපartment හරහා නව NIC, අලුත් කිරීම හෝ ප්‍රතිස්ථාපනය.',
      ta: 'நபர்கள் பதிவு துறை மூலம் புதிய NIC, புதுப்பிப்பு அல்லது மாற்றீடு.',
    },
    overview: {
      en: 'The National Identity Card (NIC) is the primary identification document for Sri Lankan citizens aged 15 and above. It is issued by the Department for Registration of Persons (DRP) with offices in every district.',
      si: 'ජාතික හැඳුනුම්පත (NIC) වයස අවුරුදු 15 සහ ඊට වැඩි ශ්‍රී ලාංකික පුරවැසියන්ගේ ප්‍රධාන හඳුනාගැනීමේ ලේඛනයයි. එය පුද්ගලයින් ලියාපදිංචි කිරීමේ දෙපartment (DRP) විසින් සෑම දistrictකම කාර්යාලවලින් නිකුත් කරයි.',
      ta: 'தேசிய அடையாள அட்டை (NIC) 15 வயது மற்றும் அதற்கு மேற்பட்ட இலங்கை குடிமக்களின் முதன்மை அடையாள ஆவணம். இது நபர்கள் பதிவு துறை (DRP) மூலம் ஒவ்வொரு மாவட்டத்திலும் வழங்கப்படுகிறது.',
    },
    requiredDocuments: [
      { en: 'Birth Certificate (original)', si: 'උපතේ සහතිකය (මුල්)', ta: 'பிறப்பு சான்றிதழ் (அசல்)' },
      { en: 'Parent\'s NIC copy (for first-time applicants under 18)', si: 'දෙමාපියන්ගේ NIC පිටපත (18 ට අඩු පළමු වරට අයදුම්කරුවන් සඳහා)', ta: 'பெற்றோரின் NIC நகல் (18க்கு கீழ் முதல் முறை விண்ணப்பதாரர்களுக்கு)' },
      { en: 'Previous NIC (for renewal/replacement)', si: 'පෙර NIC (අලුත් කිරීම/ප්‍රතිස්ථාපනය සඳහා)', ta: 'முந்தைய NIC (புதுப்பிப்பு/மாற்றீட்டுக்கு)' },
      { en: 'Police report (for lost NIC)', si: 'පolicereport (නැති වූ NIC සඳහා)', ta: 'Police report (தொலைந்த NIC க்கு)' },
      { en: 'Marriage certificate (if name changed)', si: 'විවාහ සහතිකය (නම වෙනස් නම්)', ta: 'திருமண சான்றிதழ் (பெயர் மாற்றம் இருந்தால்)' },
    ],
    steps: [
      {
        title: { en: 'Visit DRP Office', si: 'DRP කාර්යාලයට පිවිසෙන්න', ta: 'DRP அலுவலகத்திற்கு செல்லவும்' },
        description: {
          en: 'Visit the Divisional Secretariat or DRP office in your district with all required documents.',
          si: 'අවශ්‍ය ලේඛන සියල්ල සමඟ ඔබේ දistrictේ Divisional Secretariat හෝ DRP කාර්යාලයට පිවිසෙන්න.',
          ta: 'தேவையான ஆவணங்கள் அனைத்தும் உடன் உங்கள் மாவட்ட Divisional Secretariat அல்லது DRP அலுவலகத்திற்கு செல்லவும்.',
        },
      },
      {
        title: { en: 'Submit Application', si: 'අයදුම්පත ඉදිරිපත් කරන්න', ta: 'விண்ணப்பம் சமர்ப்பிக்கவும்' },
        description: {
          en: 'Complete Form RPD and submit with supporting documents. Biometric data (photo and fingerprints) will be captured.',
          si: 'Form RPD පුරවා supporting documents සමඟ ඉදිරිපත් කරන්න. Biometric data (photo සහ fingerprints) capture කරනු ලැබේ.',
          ta: 'Form RPD நிரப்பி supporting documents உடன் சமர்ப்பிக்கவும். Biometric data (photo மற்றும் fingerprints) capture செய்யப்படும்.',
        },
      },
      {
        title: { en: 'Pay Fee', si: 'ගාස්තුව ගෙවන්න', ta: 'கட்டணம் செலுத்தவும்' },
        description: {
          en: 'Pay the applicable fee at the office. New NIC: approximately LKR 500–1,000. Replacement: additional fees may apply.',
          si: 'කාර්යාලයේ අදාළ ගාස්තුව ගෙවන්න. නව NIC: LKR 500–1,000 පමණ. ප්‍රතිස්ථාපනය: අමතර ගාස්තු.',
          ta: 'அலுவலகத்தில் பொருந்தும் கட்டணம் செலுத்தவும். புதிய NIC: LKR 500–1,000. மாற்றீடு: கூடுதல் கட்டணம்.',
        },
      },
      {
        title: { en: 'Collect NIC', si: 'NIC ලබා ගන්න', ta: 'NIC பெறவும்' },
        description: {
          en: 'Return to the office on the notified date to collect your NIC. You will receive an acknowledgment slip with collection date.',
          si: 'NIC ලබා ගැනීමට දැනුම් දුන් දිනයේ කාර්යාලයට නැවත පැමිණෙන්න.',
          ta: 'NIC பெற அறிவிக்கப்பட்ட தேதியில் அலுவலகத்திற்கு திரும்பவும்.',
        },
      },
    ],
    processingTime: {
      en: 'Standard processing: 14–21 working days. Same-day service available at select offices for urgent cases.',
      si: 'සtandaard සැකසීම: වැඩ කරන දින 14–21. හදිසි අවස්ථා සඳහා තෝරාගත් කාර්යාලවල same-day සේවාව.',
      ta: 'Standard செயலாக்கம்: 14–21 வேலை நாட்கள். அவசர случаевுக்கு தேர்ந்தெடுக்கப்பட்ட அலுவலகங்களில் same-day சேவை.',
    },
    importantNotes: [
      { en: 'NIC is mandatory for opening bank accounts, voting, and most government transactions.', si: 'NIC බැංකු ගිණුම් විවෘත කිරීම, ඡන්දය සහ බොහෝ government ගනුදෙනු සඳහා අනivatory.', ta: 'NIC வங்கி கணக்குகள் திறப்பு, வாக்களிப்பு மற்றும் பெரும்பாலான government பரிவர்த்தனைகளுக்கு கட்டாயம்.' },
      { en: 'Always carry your NIC when visiting government offices.', si: 'government කාර්යාලවලට පිවිසෙන විට සැමවිටම NIC රැගෙන යන්න.', ta: 'government அலுவலகங்களுக்கு செல்லும்போது எப்போதும் NIC ஐ எடுத்துச் செல்லவும்.' },
    ],
    officialLink: 'https://www.drp.gov.lk',
    keywords: ['nic', 'identity', 'id card', 'හැඳුනුම්පත', 'அடையாள அட்டை'],
  },
  {
    id: 'driving-licence',
    icon: '🚗',
    title: {
      en: 'Driving Licence',
      si: 'රියදුරු බලපත්‍රය',
      ta: 'ஓட்டுநர் உரிமம்',
    },
    shortDescription: {
      en: 'Obtain or renew a driving licence through the Department of Motor Traffic.',
      si: 'Motor Traffic දepartment හරහා රියදුරු බලපත්‍රය ලබා ගන්න හෝ අලුත් කරන්න.',
      ta: 'Motor Traffic துறை மூலம் ஓட்டுநர் உரிமம் பெறவும் அல்லது புதுப்பிக்கவும்.',
    },
    overview: {
      en: 'The Department of Motor Traffic (DMT) issues driving licences for various vehicle categories. New applicants must pass a written exam, practical driving test, and medical examination.',
      si: 'Motor Traffic දepartment (DMT) විවිධ වාහන categories සඳහා රියදුරු බලපත්‍ර නිකුත් කරයි. නව අයදුම්කරුවන් written exam, practical driving test සහ medical examination pass කළ යුතුය.',
      ta: 'Motor Traffic துறை (DMT) பல்வேறு வாகன வகைகளுக்கு ஓட்டுநர் உரிமங்களை வழங்குகிறது. புதிய விண்ணப்பதாரர்கள் written exam, practical driving test மற்றும் medical examination pass செய்ய வேண்டும்.',
    },
    requiredDocuments: [
      { en: 'National Identity Card (NIC)', si: 'ජාතික හැඳුනුම්පත (NIC)', ta: 'தேசிய அடையாள அட்டை (NIC)' },
      { en: 'Birth Certificate', si: 'උපතේ සහතිකය', ta: 'பிறப்பு சான்றிதழ்' },
      { en: 'Medical certificate from a registered medical practitioner', si: 'ලියාපදිංචි medical practitioner කෙනෙකුගෙන් medical certificate', ta: 'பதிவு செய்யப்பட்ட medical practitioner இலிருந்து medical certificate' },
      { en: 'Passport-size photographs (4 copies)', si: 'Passport-size ඡායාරූප (4 copies)', ta: 'Passport-size புகைப்படங்கள் (4 copies)' },
      { en: 'Previous driving licence (for renewal)', si: 'පෙර රියදුරු බලපත්‍රය (අලුත් කිරීම සඳහා)', ta: 'முந்தைய ஓட்டுநர் உரிமம் (புதுப்பிப்புக்கு)' },
    ],
    steps: [
      {
        title: { en: 'Apply at DMT Office', si: 'DMT කාර්යාලයේ අයදුම් කරන්න', ta: 'DMT அலுவலகத்தில் விண்ணப்பிக்கவும்' },
        description: {
          en: 'Visit your nearest DMT office (Werahera, Kurunegala, Kandy, etc.) and obtain the application form.',
          si: 'ඔබට ආසන්නතම DMT කාර්යාලයට පිවිස අයදුම්පත ලබා ගන්න.',
          ta: 'அருகிலுள்ள DMT அலுவலகத்திற்கு சென்று விண்ணப்ப படிவம் பெறவும்.',
        },
      },
      {
        title: { en: 'Pass Written Exam', si: 'Written Exam Pass කරන්න', ta: 'Written Exam Pass செய்யவும்' },
        description: {
          en: 'Study the Highway Code and pass the written examination on traffic rules and road signs.',
          si: 'Highway Code අධ්‍යයනය කර traffic rules සහ road signs පිළිබඳ written examination pass කරන්න.',
          ta: 'Highway Code படித்து traffic rules மற்றும் road signs written examination pass செய்யவும்.',
        },
      },
      {
        title: { en: 'Complete Training', si: 'Training සම්පූර්ණ කරන්න', ta: 'Training முடிக்கவும்' },
        description: {
          en: 'Complete minimum driving training hours with a registered driving school instructor.',
          si: 'ලියාපදිංචි driving school instructor සමඟ minimum driving training hours සම්පූර්ණ කරන්න.',
          ta: 'பதிவு செய்யப்பட்ட driving school instructor உடன் minimum driving training hours முடிக்கவும்.',
        },
      },
      {
        title: { en: 'Pass Practical Test', si: 'Practical Test Pass කරන්න', ta: 'Practical Test Pass செய்யவும்' },
        description: {
          en: 'Schedule and pass the practical driving test conducted by DMT examiners.',
          si: 'DMT examiners විසින් Conduct කරන practical driving test schedule කර pass කරන්න.',
          ta: 'DMT examiners Conduct செய்யும் practical driving test schedule செய்து pass செய்யவும்.',
        },
      },
      {
        title: { en: 'Receive Licence', si: 'බලපත්‍රය ලබා ගන්න', ta: 'உரிமம் பெறவும்' },
        description: {
          en: 'Pay the fee and collect your driving licence. Probationary period applies for new drivers.',
          si: 'ගාස්තුව ගෙවා රියදුරු බලපත්‍රය ලබා ගන්න. නව drivers සඳහා probationary period.',
          ta: 'கட்டணம் செலுத்தி ஓட்டுநர் உரிமம் பெறவும். புதிய drivers க்கு probationary period.',
        },
      },
    ],
    processingTime: {
      en: 'New licence: 2–4 weeks after passing all tests. Renewal: same day at DMT office.',
      si: 'නව බලපත්‍ර: සියලු tests pass කිරීමෙන් පසු සති 2–4. අලුත් කිරීම: DMT කාර්යාලයේ same day.',
      ta: 'புதிய உரிமம்: அனைத்து tests pass செய்த பிறகு 2–4 வாரங்கள். புதுப்பிப்பு: DMT அலுவலகத்தில் same day.',
    },
    importantNotes: [
      { en: 'Minimum age for a car licence (Class B) is 18 years.', si: 'Car licence (Class B) සඳහා minimum age වයස 18.', ta: 'Car licence (Class B) க்கு minimum age 18 வயது.' },
      { en: 'International driving permit can be obtained from AA Ceylon with a valid SL licence.', si: 'International driving permit valid SL licence සමඟ AA Ceylon වෙතින් ලබා ගත හැක.', ta: 'International driving permit valid SL licence உடன் AA Ceylon இலிருந்து பெறலாம்.' },
    ],
    officialLink: 'https://www.motortraffic.gov.lk',
    keywords: ['driving', 'licence', 'license', 'dmt', 'vehicle', 'රියදුරු', 'ஓட்டுநர்'],
  },
  {
    id: 'birth-certificate',
    icon: '👶',
    title: {
      en: 'Birth Certificate',
      si: 'උපතේ සහතිකය',
      ta: 'பிறப்பு சான்றிதழ்',
    },
    shortDescription: {
      en: 'Register a birth or obtain a certified copy of a birth certificate.',
      si: 'උපතක් ලියාපදිංචි කරන්න හෝ උපතේ සහතිකයේ certified copy ලබා ගන්න.',
      ta: 'பிறப்பை பதிவு செய்யவும் அல்லது பிறப்பு சான்றிதழின் certified copy பெறவும்.',
    },
    overview: {
      en: 'Birth registration must be done within 14 days of birth at the local Registrar of Births office (Divisional Secretariat). Certified copies can be obtained for official purposes.',
      si: 'උපතෙන් දින 14 ඇතුළත local Registrar of Births කාර්යාලයේ (Divisional Secretariat) උපත ලියාපදිංචි කළ යුතුය. Certified copies official purposes සඳහා ලබා ගත හැක.',
      ta: 'பிறப்பிலிருந்து 14 நாட்களுக்குள் local Registrar of Births அலுவலகத்தில் (Divisional Secretariat) பிறப்பு பதிவு செய்யப்பட வேண்டும்.',
    },
    requiredDocuments: [
      { en: 'Hospital birth notification (Form B1)', si: 'Hospital birth notification (Form B1)', ta: 'Hospital birth notification (Form B1)' },
      { en: 'Parents\' NIC copies', si: 'දෙමාපියන්ගේ NIC copies', ta: 'பெற்றோரின் NIC copies' },
      { en: 'Parents\' marriage certificate (if applicable)', si: 'දෙමාපියන්ගේ marriage certificate (අදාළ නම්)', ta: 'பெற்றோரின் marriage certificate (பொருந்தினால்)' },
      { en: 'Application form for certified copy', si: 'Certified copy සඳහා application form', ta: 'Certified copy க்கு application form' },
    ],
    steps: [
      {
        title: { en: 'Register Birth', si: 'උපත ලියාපදිංචි කරන්න', ta: 'பிறப்பு பதிவு செய்யவும்' },
        description: {
          en: 'Submit Form B1 from the hospital to the Divisional Secretariat within 14 days of birth.',
          si: 'Hospital වෙතින් Form B1 උපතෙන් දින 14 ඇතුළත Divisional Secretariat වෙත ඉදිරිපත් කරන්න.',
          ta: 'Hospital இலிருந்து Form B1 பிறப்பிலிருந்து 14 நாட்களுக்குள் Divisional Secretariat க்கு சமர்ப்பிக்கவும்.',
        },
      },
      {
        title: { en: 'Apply for Certified Copy', si: 'Certified Copy අයදුම් කරන්න', ta: 'Certified Copy விண்ணப்பிக்கவும்' },
        description: {
          en: 'Visit the Registrar office with NIC and fill the application for a certified copy.',
          si: 'NIC සමඟ Registrar කාර්යාලයට පිවිස certified copy සඳහා application පුරවන්න.',
          ta: 'NIC உடன் Registrar அலுவலகத்திற்கு சென்று certified copy விண்ணப்பம் நிரப்பவும்.',
        },
      },
      {
        title: { en: 'Pay and Collect', si: 'ගෙවා ලබා ගන්න', ta: 'செலுத்தி பெறவும்' },
        description: {
          en: 'Pay the nominal fee (approximately LKR 100–500) and collect your certified birth certificate.',
          si: 'Nominal fee (LKR 100–500 පමණ) ගෙවා certified birth certificate ලබා ගන්න.',
          ta: 'Nominal fee (LKR 100–500) செலுத்தி certified birth certificate பெறவும்.',
        },
      },
    ],
    processingTime: {
      en: 'Registration: same day if documents are complete. Certified copy: 1–3 working days.',
      si: 'ලියාපදිංචි: ලේඛන සම්පූර්ණ නම් same day. Certified copy: වැඩ කරන දින 1–3.',
      ta: 'பதிவு: ஆவணங்கள் முழுமையாக இருந்தால் same day. Certified copy: 1–3 வேலை நாட்கள்.',
    },
    importantNotes: [
      { en: 'Late registration (after 14 days) requires additional documentation and approval.', si: 'Late registration (14 days පසු) additional documentation සහ approval අවශ්‍ය.', ta: 'Late registration (14 நாட்களுக்குப் பிறகு) additional documentation மற்றும் approval தேவை.' },
      { en: 'Birth certificate is required for school admission, passport, and NIC applications.', si: 'Birth certificate school admission, passport සහ NIC applications සඳහා අවශ්‍ය.', ta: 'Birth certificate பள்ளி admission, passport மற்றும் NIC applications க்கு தேவை.' },
    ],
    officialLink: 'https://www.drp.gov.lk',
    keywords: ['birth', 'certificate', 'registration', 'උපත', 'பிறப்பு'],
  },
  {
    id: 'marriage-certificate',
    icon: '💒',
    title: {
      en: 'Marriage Certificate',
      si: 'විවාහ සහතිකය',
      ta: 'திருமண சான்றிதழ்',
    },
    shortDescription: {
      en: 'Register a marriage or obtain a certified copy of a marriage certificate.',
      si: 'විවාහයක් ලියාපදිංචි කරන්න හෝ marriage certificate certified copy ලබා ගන්න.',
      ta: 'திருமணம் பதிவு செய்யவும் அல்லது marriage certificate certified copy பெறவும்.',
    },
    overview: {
      en: 'Marriages in Sri Lanka must be registered with the Registrar General\'s Department. Registration can be done for civil, Kandyan, Muslim, or general law marriages depending on the community.',
      si: 'ශ්‍රී ලංකාේ විවාහ Registrar General\'s Department සමඟ ලියාපදිංචි කළ යුතුය. Community අනුව civil, Kandyan, Muslim හෝ general law marriages සඳහා registration.',
      ta: 'இலங்கையில் திருமணங்கள் Registrar General\'s Department உடன் பதிவு செய்யப்பட வேண்டும்.',
    },
    requiredDocuments: [
      { en: 'NIC copies of both parties', si: 'පාර්ties දෙදෙනාගේ NIC copies', ta: 'இரு parties NIC copies' },
      { en: 'Birth certificates of both parties', si: 'පාර්ties දෙදෙනාගේ birth certificates', ta: 'இரு parties birth certificates' },
      { en: 'Affidavit of unmarried status (if applicable)', si: 'Unmarried status affidavit (අදාළ නම්)', ta: 'Unmarried status affidavit (பொருந்தினால்)' },
      { en: 'Divorce decree (if previously married)', si: 'Divorce decree (පෙර විවාහ වූ නම්)', ta: 'Divorce decree (முன்பு திருமணமானிருந்தால்)' },
      { en: 'Two witnesses with NIC', si: 'NIC සහිත witnesses දෙදෙනෙක්', ta: 'NIC உடன் witnesses இருவர்' },
    ],
    steps: [
      {
        title: { en: 'Give Notice of Marriage', si: 'Give Notice of Marriage', ta: 'Give Notice of Marriage' },
        description: {
          en: 'Submit notice of intended marriage at the Registrar office at least 14 days before the wedding date.',
          si: 'Wedding dateට අවම වශයෙන් දින 14කට පෙර Registrar කාර්යාලයේ notice of intended marriage ඉදිරිපත් කරන්න.',
          ta: 'Wedding dateக்கு குறைந்தது 14 நாட்களுக்கு முன் Registrar அலுவலகத்தில் notice of intended marriage சமர்ப்பிக்கவும்.',
        },
      },
      {
        title: { en: 'Marriage Ceremony & Registration', si: 'Marriage Ceremony & Registration', ta: 'Marriage Ceremony & Registration' },
        description: {
          en: 'The marriage is solemnized by a registered Marriage Registrar and recorded in the official register.',
          si: 'Registered Marriage Registrar විසින් marriage solemnized කර official register එකේ record කරයි.',
          ta: 'Registered Marriage Registrar marriage solemnized செய்து official register இல் record செய்கிறார்.',
        },
      },
      {
        title: { en: 'Obtain Certificate', si: 'Certificate ලබා ගන්න', ta: 'Certificate பெறவும்' },
        description: {
          en: 'Apply for a certified copy of the marriage certificate from the Registrar General\'s Department.',
          si: 'Registrar General\'s Department වෙතින් marriage certificate certified copy අයදුම් කරන්න.',
          ta: 'Registrar General\'s Department இலிருந்து marriage certificate certified copy விண்ணப்பிக்கவும்.',
        },
      },
    ],
    processingTime: {
      en: 'Notice period: minimum 14 days. Certificate copy: 3–7 working days after registration.',
      si: 'Notice period: අවම දින 14. Certificate copy: registration පසු වැඩ කරන දින 3–7.',
      ta: 'Notice period: குறைந்தது 14 நாட்கள். Certificate copy: registration பிறகு 3–7 வேலை நாட்கள்.',
    },
    importantNotes: [
      { en: 'Minimum legal age for marriage is 18 years for both parties.', si: 'Legal marriage age පාර්ties දෙදෙනාටම වයස 18.', ta: 'Legal marriage age இரு parties க்கும் 18 வயது.' },
      { en: 'Marriage certificate is required for visa applications and name changes on NIC.', si: 'Marriage certificate visa applications සහ NIC name changes සඳහා අවශ්‍ය.', ta: 'Marriage certificate visa applications மற்றும் NIC name changes க்கு தேவை.' },
    ],
    officialLink: 'https://www.rgd.gov.lk',
    keywords: ['marriage', 'wedding', 'certificate', 'විවාහ', 'திருமண'],
  },
  {
    id: 'death-certificate',
    icon: '📋',
    title: {
      en: 'Death Certificate',
      si: 'මරණ සහතිකය',
      ta: 'மரண சான்றிதழ்',
    },
    shortDescription: {
      en: 'Register a death and obtain an official death certificate.',
      si: 'මරණයක් ලියාපදිංචි කර official death certificate ලබා ගන්න.',
      ta: 'மரணம் பதிவு செய்து official death certificate பெறவும்.',
    },
    overview: {
      en: 'Death must be registered within 24 hours at the local Registrar of Deaths office. The certificate is required for insurance claims, property transfer, and legal proceedings.',
      si: 'මරණ local Registrar of Deaths කාර්යාලයේ පැය 24 ඇතුළත ලියාපදිංචි කළ යුතුය. Certificate insurance claims, property transfer සහ legal proceedings සඳහා අවශ්‍ය.',
      ta: 'மரணம் local Registrar of Deaths அலுவலகத்தில் 24 மணி நேரத்திற்குள் பதிவு செய்யப்பட வேண்டும்.',
    },
    requiredDocuments: [
      { en: 'Medical certificate of cause of death (Form B2)', si: 'Medical certificate of cause of death (Form B2)', ta: 'Medical certificate of cause of death (Form B2)' },
      { en: 'NIC of the deceased', si: 'Deceased NIC', ta: 'Deceased NIC' },
      { en: 'NIC of the informant (relative)', si: 'Informant (relative) NIC', ta: 'Informant (relative) NIC' },
      { en: 'Birth certificate of deceased (if available)', si: 'Deceased birth certificate (ලබා ගත හැකි නම්)', ta: 'Deceased birth certificate (கிடைத்தால்)' },
    ],
    steps: [
      {
        title: { en: 'Obtain Medical Certificate', si: 'Medical Certificate ලබා ගන්න', ta: 'Medical Certificate பெறவும்' },
        description: {
          en: 'A registered medical practitioner must certify the cause of death and issue Form B2.',
          si: 'Registered medical practitioner මරණ cause certify කර Form B2 නිකුත් කළ යුතුය.',
          ta: 'Registered medical practitioner மரண cause certify செய்து Form B2 வழங்க வேண்டும்.',
        },
      },
      {
        title: { en: 'Register at Registrar Office', si: 'Registrar කාර්යාලයේ ලියාපදිංචි', ta: 'Registrar அலுவலகத்தில் பதிவு' },
        description: {
          en: 'Submit Form B2 and required documents to the Divisional Secretariat within 24 hours.',
          si: 'Form B2 සහ required documents පැය 24 ඇතුළත Divisional Secretariat වෙත ඉදිරිපත් කරන්න.',
          ta: 'Form B2 மற்றும் required documents 24 மணி நேரத்திற்குள் Divisional Secretariat க்கு சமர்ப்பிக்கவும்.',
        },
      },
      {
        title: { en: 'Collect Death Certificate', si: 'Death Certificate ලබා ගන්න', ta: 'Death Certificate பெறவும்' },
        description: {
          en: 'Apply for certified copies as needed for legal and administrative purposes.',
          si: 'Legal සහ administrative purposes සඳහා certified copies අවශ්‍ය පරිදi අයදුම් කරන්න.',
          ta: 'Legal மற்றும் administrative purposes க்கு certified copies தேவையானபடி விண்ணப்பிக்கவும்.',
        },
      },
    ],
    processingTime: {
      en: 'Registration: same day. Certified copies: 1–2 working days.',
      si: 'Registration: same day. Certified copies: වැඩ කරන දින 1–2.',
      ta: 'Registration: same day. Certified copies: 1–2 வேலை நாட்கள்.',
    },
    importantNotes: [
      { en: 'Registration is mandatory before cremation or burial permits are issued.', si: 'Cremation හෝ burial permits නිකුත් කිරීමට පෙර registration mandatory.', ta: 'Cremation அல்லது burial permits வழங்குவதற்கு முன் registration கட்டாயம்.' },
      { en: 'Multiple certified copies may be needed for banks, insurance, and property matters.', si: 'Banks, insurance සහ property matters සඳහා multiple certified copies අවශ්‍ය විය හැක.', ta: 'Banks, insurance மற்றும் property matters க்கு multiple certified copies தேவைப்படலாம்.' },
    ],
    officialLink: 'https://www.rgd.gov.lk',
    keywords: ['death', 'certificate', 'registration', 'මරණ', 'மரண'],
  },
  {
    id: 'business-registration',
    icon: '🏢',
    title: {
      en: 'Business Registration',
      si: 'ව්‍යාපාර ලියාපදිංචි',
      ta: 'வணிக பதிவு',
    },
    shortDescription: {
      en: 'Register a sole proprietorship, partnership, or company with the Registrar of Companies.',
      si: 'Registrar of Companies සමඟ sole proprietorship, partnership හෝ company ලියාපදිංචි.',
      ta: 'Registrar of Companies உடன் sole proprietorship, partnership அல்லது company பதிவு.',
    },
    overview: {
      en: 'Businesses in Sri Lanka must be registered with the Department of Registrar of Companies (ROC). Registration types include sole proprietorship (Business Name Registration), partnership, and private limited company.',
      si: 'ශ්‍රී ලංකා ව්‍යාපාර Registrar of Companies (ROC) සමඟ ලියාපදිංචි කළ යුතුය. Registration types: sole proprietorship, partnership, private limited company.',
      ta: 'இலங்கை வணிகங்கள் Registrar of Companies (ROC) உடன் பதிவு செய்யப்பட வேண்டும்.',
    },
    requiredDocuments: [
      { en: 'NIC copies of owner(s)/directors', si: 'Owner(s)/directors NIC copies', ta: 'Owner(s)/directors NIC copies' },
      { en: 'Business name search approval', si: 'Business name search approval', ta: 'Business name search approval' },
      { en: 'Articles of Association (for companies)', si: 'Articles of Association (companies සඳහා)', ta: 'Articles of Association (companies க்கு)' },
      { en: 'Form 1 and Form 18 (for private limited companies)', si: 'Form 1 සහ Form 18 (private limited companies)', ta: 'Form 1 மற்றும் Form 18 (private limited companies)' },
      { en: 'Registered office address proof', si: 'Registered office address proof', ta: 'Registered office address proof' },
    ],
    steps: [
      {
        title: { en: 'Name Search & Reservation', si: 'Name Search & Reservation', ta: 'Name Search & Reservation' },
        description: {
          en: 'Submit a name search request via the eROC portal (eroc.drc.gov.lk) and reserve your business name.',
          si: 'eROC portal (eroc.drc.gov.lk) හරහා name search request ඉදිරිපත් කර business name reserve කරන්න.',
          ta: 'eROC portal (eroc.drc.gov.lk) மூலம் name search request சமர்ப்பித்து business name reserve செய்யவும்.',
        },
      },
      {
        title: { en: 'Prepare Documents', si: 'Documents සකස් කරන්න', ta: 'Documents தயார் செய்யவும்' },
        description: {
          en: 'Prepare registration forms, Articles of Association, and director consent forms as applicable.',
          si: 'Registration forms, Articles of Association සහ director consent forms සකස් කරන්න.',
          ta: 'Registration forms, Articles of Association மற்றும் director consent forms தயார் செய்யவும்.',
        },
      },
      {
        title: { en: 'Submit Registration', si: 'Registration ඉදිරිපත් කරන්න', ta: 'Registration சமர்ப்பிக்கவும்' },
        description: {
          en: 'Submit all documents online via eROC or in person at the ROC office in Colombo.',
          si: 'eROC හරහා online හෝ Colombo ROC කාර්යාලයේ personally documents ඉදිරිපත් කරන්න.',
          ta: 'eROC மூலம் online அல்லது Colombo ROC அலுவலகத்தில் personally documents சமர்ப்பிக்கவும்.',
        },
      },
      {
        title: { en: 'Receive Certificate', si: 'Certificate ලබා ගන්න', ta: 'Certificate பெறவும்' },
        description: {
          en: 'Upon approval, receive your Certificate of Incorporation or Business Registration Certificate.',
          si: 'Approval පසු Certificate of Incorporation හෝ Business Registration Certificate ලබා ගන්න.',
          ta: 'Approval பிறகு Certificate of Incorporation அல்லது Business Registration Certificate பெறவும்.',
        },
      },
    ],
    processingTime: {
      en: 'Sole proprietorship: 1–3 days. Private limited company: 5–10 working days.',
      si: 'Sole proprietorship: දින 1–3. Private limited company: වැඩ කරන දින 5–10.',
      ta: 'Sole proprietorship: 1–3 நாட்கள். Private limited company: 5–10 வேலை நாட்கள்.',
    },
    importantNotes: [
      { en: 'After registration, obtain a TIN from the Inland Revenue Department for tax purposes.', si: 'Registration පසු tax purposes සඳහා Inland Revenue Department වෙතින් TIN ලබා ගන්න.', ta: 'Registration பிறகு tax purposes க்கு Inland Revenue Department இலிருந்து TIN பெறவும்.' },
      { en: 'Annual returns must be filed with the ROC to maintain active status.', si: 'Active status පවත්වා ගැනීමට ROC වෙත annual returns file කළ යුතුය.', ta: 'Active status பராமரிக்க ROC க்கு annual returns file செய்ய வேண்டும்.' },
    ],
    officialLink: 'https://www.drc.gov.lk',
    keywords: ['business', 'company', 'registration', 'roc', 'ව්‍යාපාර', 'வணிக'],
  },
  {
    id: 'tax-registration',
    icon: '💰',
    title: {
      en: 'Tax Registration',
      si: 'බදු ලියාපදිංචි',
      ta: 'வரி பதிவு',
    },
    shortDescription: {
      en: 'Register for Tax Identification Number (TIN) and VAT with the Inland Revenue Department.',
      si: 'Inland Revenue Department සමඟ TIN සහ VAT ලියාපදිංචි.',
      ta: 'Inland Revenue Department உடன் TIN மற்றும் VAT பதிவு.',
    },
    overview: {
      en: 'All individuals and businesses earning taxable income in Sri Lanka must register with the Inland Revenue Department (IRD) and obtain a Tax Identification Number (TIN). Businesses exceeding turnover thresholds must register for VAT.',
      si: 'ශ්‍රී ලංකාේ taxable income උපයන individuals සහ businesses Inland Revenue Department (IRD) සමඟ register වී TIN ලබා ගත යුතුය.',
      ta: 'இலங்கையில் taxable income சம்பாதிக்கும் individuals மற்றும் businesses Inland Revenue Department (IRD) உடன் register செய்து TIN பெற வேண்டும்.',
    },
    requiredDocuments: [
      { en: 'NIC or Business Registration Certificate', si: 'NIC හෝ Business Registration Certificate', ta: 'NIC அல்லது Business Registration Certificate' },
      { en: 'Proof of address', si: 'Address proof', ta: 'Address proof' },
      { en: 'Bank account details', si: 'Bank account details', ta: 'Bank account details' },
      { en: 'Financial statements (for VAT registration)', si: 'Financial statements (VAT registration)', ta: 'Financial statements (VAT registration)' },
    ],
    steps: [
      {
        title: { en: 'Register on IRD Portal', si: 'IRD Portal එකේ Register', ta: 'IRD Portal இல் Register' },
        description: {
          en: 'Visit www.ird.gov.lk and create an account on the Taxpayer Information Management System (TIMS).',
          si: 'www.ird.gov.lk වෙත පිවිස Taxpayer Information Management System (TIMS) එකේ account සාදන්න.',
          ta: 'www.ird.gov.lk பார்வையிட்டு Taxpayer Information Management System (TIMS) இல் account உருவாக்கவும்.',
        },
      },
      {
        title: { en: 'Apply for TIN', si: 'TIN අයදුම් කරන්න', ta: 'TIN விண்ணப்பிக்கவும்' },
        description: {
          en: 'Complete the TIN registration form with personal or business details and submit online.',
          si: 'Personal හෝ business details සමඟ TIN registration form පුරවා online ඉදිරිපත් කරන්න.',
          ta: 'Personal அல்லது business details உடன் TIN registration form நிரப்பி online சமர்ப்பிக்கவும்.',
        },
      },
      {
        title: { en: 'VAT Registration (if applicable)', si: 'VAT Registration (අදාළ නම්)', ta: 'VAT Registration (பொருந்தினால்)' },
        description: {
          en: 'Businesses with annual turnover above LKR 12 million must register for VAT (currently 18%).',
          si: 'Annual turnover LKR 12 million ට වැඩි businesses VAT (18%) සඳහා register විය යුතුය.',
          ta: 'Annual turnover LKR 12 million க்கு மேல் businesses VAT (18%) க்கு register செய்ய வேண்டும்.',
        },
      },
      {
        title: { en: 'Receive TIN Certificate', si: 'TIN Certificate ලබා ගන්න', ta: 'TIN Certificate பெறவும்' },
        description: {
          en: 'Download your TIN certificate from the IRD portal once approved.',
          si: 'Approval පසු IRD portal වෙතින් TIN certificate download කරන්න.',
          ta: 'Approval பிறகு IRD portal இலிருந்து TIN certificate download செய்யவும்.',
        },
      },
    ],
    processingTime: {
      en: 'TIN registration: 3–5 working days online. VAT registration: 7–14 working days.',
      si: 'TIN registration: online වැඩ කරන දින 3–5. VAT registration: වැඩ කරන දින 7–14.',
      ta: 'TIN registration: online 3–5 வேலை நாட்கள். VAT registration: 7–14 வேலை நாட்கள்.',
    },
    importantNotes: [
      { en: 'File annual tax returns before November 30 each year.', si: 'Annual tax returns සෑම වසරකම November 30ට පෙර file කරන්න.', ta: 'Annual tax returns ஒவ்வொரு வருடமும் November 30க்கு முன் file செய்யவும்.' },
      { en: 'Keep all receipts and financial records for at least 6 years.', si: 'Receipts සහ financial records අවම වශයෙන් වසර 6ක් තබා ගන්න.', ta: 'Receipts மற்றும் financial records குறைந்தது 6 வருடங்கள் வைத்திருக்கவும்.' },
    ],
    officialLink: 'https://www.ird.gov.lk',
    keywords: ['tax', 'tin', 'vat', 'ird', 'revenue', 'බදු', 'வரி'],
  },
  {
    id: 'general-services',
    icon: '🏛️',
    title: {
      en: 'General Government Services',
      si: 'සාමාන්‍ය රජයේ සේවා',
      ta: 'பொது அரச சேவைகள்',
    },
    shortDescription: {
      en: 'Access information about common government services, e-services, and citizen portals.',
      si: 'Common government services, e-services සහ citizen portals පිළිබඳ තොරතුරු.',
      ta: 'Common government services, e-services மற்றும் citizen portals பற்றிய தகவல்.',
    },
    overview: {
      en: 'The Sri Lankan government offers numerous e-services through portals like Gov.lk, Grama Niladhari services, pension applications, utility connections, and more. Citizens can access many services online or through Divisional Secretariats.',
      si: 'ශ්‍රී ලංකා රජය Gov.lk, ග්‍රාම නිලධාරී සේවා, විශ්‍රාන්ත වැටුප් අයදුම්, උපයෝගිතා සම්බන්ධතා සහ තවත් බොහෝ ඊ-සේවා ද්වාර හරහා ලබා දෙයි.',
      ta: 'இலங்கை அரசு Gov.lk, Grama Niladhari services, pension applications, utility connections மற்றும் பல e-services portals மூலம் வழங்குகிறது.',
    },
    requiredDocuments: [
      { en: 'National Identity Card (NIC) — required for most services', si: 'NIC — බොහෝ services සඳහා අවශ්‍ය', ta: 'NIC — பெரும்பாலான services க்கு தேவை' },
      { en: 'Relevant application forms (available on respective department websites)', si: 'Relevant application forms (department websites)', ta: 'Relevant application forms (department websites)' },
      { en: 'Supporting documents as specified by each service', si: 'Supporting documents (service අනුව)', ta: 'Supporting documents (service படி)' },
    ],
    steps: [
      {
        title: { en: 'Visit Gov.lk Portal', si: 'Gov.lk Portal වෙත පිවිසෙන්න', ta: 'Gov.lk Portal க்கு செல்லவும்' },
        description: {
          en: 'Browse www.gov.lk for a comprehensive directory of government services and e-services.',
          si: 'www.gov.lk browse කර government services සහ e-services directory බලන්න.',
          ta: 'www.gov.lk browse செய்து government services மற்றும் e-services directory பார்க்கவும்.',
        },
      },
      {
        title: { en: 'Contact Grama Niladhari', si: 'Grama Niladhari සම්බන්ධ වන්න', ta: 'Grama Niladhari தொடர்பு கொள்ளவும்' },
        description: {
          en: 'Your local Grama Niladhari can assist with residency certificates, income certificates, and local attestations.',
          si: 'Local Grama Niladhari residency certificates, income certificates සහ local attestations සඳහා උදව් කළ හැක.',
          ta: 'Local Grama Niladhari residency certificates, income certificates மற்றும் local attestations க்கு உதவலாம்.',
        },
      },
      {
        title: { en: 'Use Divisional Secretariat', si: 'Divisional Secretariat භාවිතා කරන්න', ta: 'Divisional Secretariat பயன்படுத்தவும்' },
        description: {
          en: 'Divisional Secretariats handle land permits, welfare applications, and various local government services.',
          si: 'Divisional Secretariats land permits, welfare applications සහ local government services handle කරයි.',
          ta: 'Divisional Secretariats land permits, welfare applications மற்றும் local government services handle செய்கின்றன.',
        },
      },
      {
        title: { en: 'Call 1919 Hotline', si: '1919 Hotline අමතන්න', ta: '1919 Hotline அழைக்கவும்' },
        description: {
          en: 'Dial 1919 for the Government Information Center — available in Sinhala, Tamil, and English.',
          si: '1919 Government Information Center — Sinhala, Tamil, English.',
          ta: '1919 Government Information Center — Sinhala, Tamil, English.',
        },
      },
    ],
    processingTime: {
      en: 'Varies by service. E-services: instant to 5 days. In-person services: 1–21 working days.',
      si: 'Service අනුව වෙනස්. E-services: instant to 5 days. In-person: 1–21 working days.',
      ta: 'Service படி மாறுபடும். E-services: instant to 5 days. In-person: 1–21 working days.',
    },
    importantNotes: [
      { en: 'Always verify information on official government websites before applying.', si: 'Apply කිරීමට පෙර official government websites වල information verify කරන්න.', ta: 'Apply செய்வதற்கு முன் official government websites இல் information verify செய்யவும்.' },
      { en: 'Beware of unauthorized agents charging excessive fees for government services.', si: 'Unauthorized agents excessive fees ගැනීමෙන් ප්‍රවේශම් වන්න.', ta: 'Unauthorized agents excessive fees வசூலிப்பதை beware.' },
    ],
    officialLink: 'https://www.gov.lk',
    keywords: ['government', 'gov', 'general', 'services', 'e-services', '1919', 'රජය', 'அரசு'],
  },
];

export function getServiceById(id: string): GovernmentService | undefined {
  return governmentServices.find((s) => s.id === id);
}

export function searchServices(query: string): GovernmentService[] {
  const q = query.toLowerCase().trim();
  if (!q) return governmentServices;
  return governmentServices.filter(
    (s) =>
      s.keywords.some((k) => k.toLowerCase().includes(q)) ||
      s.title.en.toLowerCase().includes(q) ||
      s.title.si.includes(q) ||
      s.title.ta.includes(q) ||
      s.id.includes(q)
  );
}
