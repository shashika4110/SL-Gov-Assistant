import { useState, useCallback, useRef, useEffect } from 'react';
import type { ChatMessage, Language } from '../types';
import { sendChatMessage, AIServiceError } from '../services/aiService';
import { getTranslation } from '../i18n/translations';

const STORAGE_KEY = 'sl-gov-assistant-chat';

function generateId(): string {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function loadMessages(): ChatMessage[] {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.map((m: ChatMessage) => ({
        ...m,
        timestamp: new Date(m.timestamp),
      }));
    }
  } catch {
    /* ignore */
  }
  return [];
}

export function useChat(language: Language) {
  const [messages, setMessages] = useState<ChatMessage[]>(loadMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef(false);
  const t = getTranslation(language);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed) {
        setError(t.chat.emptyMessage);
        return;
      }

      setError(null);
      abortRef.current = false;

      const userMsg: ChatMessage = {
        id: generateId(),
        role: 'user',
        content: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      try {
        const history = messages.map((m) => ({
          role: m.role,
          content: m.content,
        }));

        const response = await sendChatMessage(trimmed, history, language);

        if (abortRef.current) return;

        const assistantMsg: ChatMessage = {
          id: generateId(),
          role: 'assistant',
          content: response,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
      } catch (err) {
        if (abortRef.current) return;

        let errorMessage = t.chat.apiError;
        if (err instanceof AIServiceError) {
          if (err.type === 'network') errorMessage = t.chat.noInternet;
          else if (err.type === 'timeout') errorMessage = t.chat.timeout;
          else errorMessage = t.chat.apiError;
        }

        setError(errorMessage);
        const errorMsg: ChatMessage = {
          id: generateId(),
          role: 'assistant',
          content: errorMessage,
          timestamp: new Date(),
          isError: true,
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, language, t]
  );

  const clearChat = useCallback(() => {
    abortRef.current = true;
    setMessages([]);
    setError(null);
    setIsLoading(false);
    sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  return { messages, isLoading, error, sendMessage, clearChat, setError };
}
