import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '../ui/Button';
import { getTranslation } from '../../i18n/translations';
import { useLanguage } from '../../hooks/useLanguage';
import { useSpeechRecognition } from '../../hooks/useSpeechRecognition';
import './ChatInput.css';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleVoiceResult = useCallback((text: string) => {
    setInput(text);
  }, []);

  const { isListening, isSupported, startListening, stopListening } = useSpeechRecognition({
    language,
    onResult: handleVoiceResult,
  });

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || disabled) return;
    onSend(input);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${Math.min(el.scrollHeight, 150)}px`;
    }
  }, [input]);

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <div className="chat-input__wrapper">
        {isSupported && (
          <button
            type="button"
            className={`chat-input__voice ${isListening ? 'chat-input__voice--active' : ''}`}
            onClick={isListening ? stopListening : startListening}
            disabled={disabled}
            aria-label={isListening ? t.chat.stopListening : t.chat.startListening}
            title={t.chat.voiceInput}
          >
            {isListening ? '⏹' : '🎤'}
          </button>
        )}
        <textarea
          ref={textareaRef}
          className="chat-input__field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.chat.placeholder}
          disabled={disabled}
          rows={1}
          aria-label={t.chat.placeholder}
        />
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={disabled || !input.trim()}
          loading={disabled}
          aria-label={t.chat.send}
        >
          {t.chat.send}
        </Button>
      </div>
    </form>
  );
}
