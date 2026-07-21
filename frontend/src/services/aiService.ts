import type { Language } from '../types';
import { api, type ChatResponse } from './api';
import { generateKnowledgeBaseResponse } from './knowledgeBase';

export class AIServiceError extends Error {
  constructor(
    message: string,
    public type: 'network' | 'api' | 'timeout' | 'unknown' = 'unknown'
  ) {
    super(message);
    this.name = 'AIServiceError';
  }
}

/** Send chat message via Express backend (Gemini AI) with local fallback */
export async function sendChatMessage(
  userMessage: string,
  history: { role: 'user' | 'assistant'; content: string }[],
  lang: Language,
  sessionId?: string
): Promise<string> {
  if (!navigator.onLine) {
    throw new AIServiceError('No internet connection', 'network');
  }

  try {
    const { data } = await api.post<ChatResponse>('/chat/message', {
      message: userMessage,
      history,
      language: lang,
      sessionId,
    });
    return data.data.reply;
  } catch (error) {
    if (axiosIsNetworkError(error)) {
      throw new AIServiceError('No internet connection', 'network');
    }
    if (axiosIsTimeout(error)) {
      throw new AIServiceError('Request timed out', 'timeout');
    }

    console.warn('Backend API failed, falling back to knowledge base:', error);
    await new Promise((r) => setTimeout(r, 500));
    return generateKnowledgeBaseResponse(userMessage, lang);
  }
}

function axiosIsNetworkError(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code?: string }).code === 'ERR_NETWORK'
  );
}

function axiosIsTimeout(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code?: string }).code === 'ECONNABORTED'
  );
}
