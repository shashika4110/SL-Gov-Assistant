import { governmentServices } from '../data/servicesData.js';

const VERIFY =
  'Please verify the latest information through the relevant Sri Lankan government authority.';

function localized(text, lang) {
  if (!text) return '';
  return text[lang] || text.en;
}

export function findMatchingService(query) {
  const q = query.toLowerCase();
  const scores = governmentServices.map((service) => {
    let score = 0;
    const idSpace = service.id.replace(/-/g, ' ');
    if (idSpace.includes(q) || q.includes(idSpace)) score += 10;
    (service.keywords || []).forEach((kw) => {
      if (q.includes(kw.toLowerCase())) score += 5;
    });
    const keywords = {
      passport: ['passport', 'ගමන්', 'கடவுச்சீடு'],
      nic: ['nic', 'identity', 'හැඳුනුම්', 'அடையாள'],
      'driving-licence': ['driv', 'licen', 'vehicle', 'රියදුරු', 'ஓட்டுநர்'],
      'birth-certificate': ['birth', 'උපත', 'பிறப்பு'],
      'marriage-certificate': ['marri', 'wedding', 'විවාහ', 'திருமண'],
      'death-certificate': ['death', 'මරණ', 'மரண'],
      'business-registration': ['business', 'company', 'ව්‍යාපාර', 'வணிக'],
      'tax-registration': ['tax', 'tin', 'vat', 'බදු', 'வரி'],
    };
    if (keywords[service.id]?.some((k) => q.includes(k))) score += 15;
    return { service, score };
  });
  scores.sort((a, b) => b.score - a.score);
  return scores[0]?.score > 0 ? scores[0].service : null;
}

export function formatServiceResponse(service, lang = 'en') {
  if (!service) {
    const list = governmentServices.map((s) => `- **${localized(s.title, lang)}**`).join('\n');
    return `## Government Services Information\n\nI can help with:\n\n${list}\n\n---\n*${VERIFY}*`;
  }

  const t = (obj) => localized(obj, lang);
  let r = `## ${t(service.title)}\n\n### Overview\n${t(service.overview)}\n\n### Required Documents\n`;
  service.requiredDocuments.forEach((d, i) => { r += `${i + 1}. ${t(d)}\n`; });
  r += '\n### Steps\n';
  service.steps.forEach((step, i) => {
    r += `**${i + 1}. ${t(step.title)}**\n${t(step.description)}\n\n`;
  });
  r += `### Processing Time\n${t(service.processingTime)}\n\n### Important Notes\n`;
  service.importantNotes.forEach((n) => { r += `- ${t(n)}\n`; });
  if (service.officialLink) r += `\n**Official Website:** ${service.officialLink}\n`;
  r += `\n---\n*${VERIFY}*`;
  return r;
}

export { governmentServices };
