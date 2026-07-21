import type { GovernmentService, Language } from '../types';
import { governmentServices } from '../data/services';
import { getLocalizedText } from '../i18n/translations';

const VERIFY_NOTE =
  'Please verify the latest information through the relevant Sri Lankan government authority.';

/** Format a government service into the structured AI response format */
export function formatServiceResponse(
  service: GovernmentService,
  lang: Language
): string {
  const t = (text: { en: string; si: string; ta: string }) =>
    getLocalizedText(text, lang);

  let response = `## ${t(service.title)}\n\n`;
  response += `### Overview\n${t(service.overview)}\n\n`;
  response += `### Required Documents\n`;
  service.requiredDocuments.forEach((doc, i) => {
    response += `${i + 1}. ${t(doc)}\n`;
  });
  response += `\n### Steps\n`;
  service.steps.forEach((step, i) => {
    response += `**${i + 1}. ${t(step.title)}**\n${t(step.description)}\n\n`;
  });
  response += `### Processing Time\n${t(service.processingTime)}\n\n`;
  response += `### Important Notes\n`;
  service.importantNotes.forEach((note, i) => {
    response += `- ${t(note)}\n`;
  });
  if (service.officialLink) {
    response += `\n**Official Website:** ${service.officialLink}\n`;
  }
  response += `\n---\n*${VERIFY_NOTE}*`;
  return response;
}

/** Find the best matching service for a user query */
export function findMatchingService(query: string): GovernmentService | null {
  const q = query.toLowerCase();
  const scores = governmentServices.map((service) => {
    let score = 0;
    if (service.id.replace(/-/g, ' ').includes(q) || q.includes(service.id.replace(/-/g, ' '))) {
      score += 10;
    }
    service.keywords.forEach((kw) => {
      if (q.includes(kw.toLowerCase()) || kw.toLowerCase().includes(q)) score += 5;
    });
    if (service.title.en.toLowerCase().split(' ').some((w) => q.includes(w) && w.length > 3)) {
      score += 3;
    }
    // Specific keyword mappings
    if (q.includes('passport') || q.includes('ගමන්') || q.includes('கடவுச்சீடு')) {
      if (service.id === 'passport') score += 15;
    }
    if (q.includes('nic') || q.includes('identity') || q.includes('හැඳුනුම්') || q.includes('அடையாள')) {
      if (service.id === 'nic') score += 15;
    }
    if (q.includes('driv') || q.includes('licen') || q.includes('vehicle') || q.includes('රියදුරු') || q.includes('ஓட்டுநர்')) {
      if (service.id === 'driving-licence') score += 15;
    }
    if (q.includes('birth') || q.includes('උපත') || q.includes('பிறப்பு')) {
      if (service.id === 'birth-certificate') score += 15;
    }
    if (q.includes('marri') || q.includes('wedding') || q.includes('විවාහ') || q.includes('திருமண')) {
      if (service.id === 'marriage-certificate') score += 15;
    }
    if (q.includes('death') || q.includes('මරණ') || q.includes('மரண')) {
      if (service.id === 'death-certificate') score += 15;
    }
    if (q.includes('business') || q.includes('company') || q.includes('ව්‍යාපාර') || q.includes('வணிக')) {
      if (service.id === 'business-registration') score += 15;
    }
    if (q.includes('tax') || q.includes('tin') || q.includes('vat') || q.includes('බදු') || q.includes('வரி')) {
      if (service.id === 'tax-registration') score += 15;
    }
    return { service, score };
  });
  scores.sort((a, b) => b.score - a.score);
  return scores[0]?.score > 0 ? scores[0].service : null;
}

/** Generate a knowledge-base response when AI API is unavailable */
export function generateKnowledgeBaseResponse(
  query: string,
  lang: Language
): string {
  const match = findMatchingService(query);
  if (match) {
    return formatServiceResponse(match, lang);
  }

  // General response listing available services
  const serviceList = governmentServices
    .map((s) => `- **${getLocalizedText(s.title, lang)}**`)
    .join('\n');

  return `## Government Services Information

I can help you with the following Sri Lankan government services:

${serviceList}

Please ask a specific question about any of these services, for example:
- "How do I apply for a passport?"
- "What documents do I need for NIC?"
- "How to get a driving licence?"

---
*${VERIFY_NOTE}*`;
}
