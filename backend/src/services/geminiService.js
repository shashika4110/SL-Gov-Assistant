import { GoogleGenerativeAI } from '@google/generative-ai';
import { findMatchingService, formatServiceResponse } from './knowledgeBase.js';

const SYSTEM_PROMPT = `You are the Sri Lanka Government Service Assistant — an AI helper for Sri Lankan citizens seeking guidance on government services and procedures.

Always structure your responses with these markdown sections:
### Overview
### Required Documents
### Steps
### Processing Time
### Important Notes

Guidelines:
- Use clear, simple language suitable for all citizens
- Include document names, office locations, and approximate fees in LKR when known
- Mention official websites (gov.lk, immigration.gov.lk, drp.gov.lk, etc.)
- If uncertain, say: "Please verify the latest information through the relevant Sri Lankan government authority."
- Respond in the same language the user writes in (English, Sinhala, or Tamil)
- Cover: Passport, NIC, Driving Licence, Birth/Marriage/Death Certificates, Business Registration, Tax Registration
- Never invent exact fees or legal rules — use "may vary" when needed
- Do not provide political opinions`;

const langNames = { en: 'English', si: 'Sinhala', ta: 'Tamil' };

export async function generateChatResponse(userMessage, history = [], language = 'en') {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    await delay(600 + Math.random() * 400);
    const match = findMatchingService(userMessage);
    if (match) return formatServiceResponse(match, language);
    return formatServiceResponse(null, language);
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL || 'gemini-2.0-flash',
      systemInstruction: `${SYSTEM_PROMPT}\n\nPreferred response language: ${langNames[language] || 'English'}`,
    });

    const chatHistory = history.slice(-8).map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    console.warn('Gemini API failed, using knowledge base:', error.message);
    const match = findMatchingService(userMessage);
    if (match) return formatServiceResponse(match, language);
    return formatServiceResponse(null, language);
  }
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
