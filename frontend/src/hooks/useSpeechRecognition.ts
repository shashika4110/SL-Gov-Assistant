import { useState, useCallback, useRef } from 'react';

interface UseSpeechRecognitionOptions {
  language: string;
  onResult: (text: string) => void;
}

export function useSpeechRecognition({ language, onResult }: UseSpeechRecognitionOptions) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported] = useState(() => 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const langMap: Record<string, string> = {
    en: 'en-LK',
    si: 'si-LK',
    ta: 'ta-LK',
  };

  const startListening = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = langMap[language] || 'en-LK';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.onresult = (event) => {
      const text = event.results[0]?.[0]?.transcript;
      if (text) onResult(text);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [language, onResult]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const speak = useCallback((text: string, lang: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.replace(/[#*_`]/g, '').slice(0, 500));
    utterance.lang = langMap[lang] || 'en-LK';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }, []);

  return { isListening, isSupported, startListening, stopListening, speak };
}

// Web Speech API types
interface SpeechRecognition extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  onstart: ((ev: Event) => void) | null;
  onend: ((ev: Event) => void) | null;
  onerror: ((ev: Event) => void) | null;
  onresult: ((ev: SpeechRecognitionEvent) => void) | null;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}
