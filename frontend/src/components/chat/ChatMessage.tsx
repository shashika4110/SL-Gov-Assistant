import { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { ChatMessage as ChatMessageType } from '../../types';
import { formatTime, copyToClipboard } from '../../utils/helpers';
import { getTranslation } from '../../i18n/translations';
import { useLanguage } from '../../hooks/useLanguage';
import './ChatMessage.css';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = async () => {
    const success = await copyToClipboard(message.content);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSpeak = useCallback(() => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const plain = message.content.replace(/[#*_`[\]()>-]/g, '').slice(0, 500);
    const utterance = new SpeechSynthesisUtterance(plain);
    utterance.lang = language === 'si' ? 'si-LK' : language === 'ta' ? 'ta-LK' : 'en-LK';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }, [message.content, language]);

  return (
    <div
      className={`chat-message ${isUser ? 'chat-message--user' : 'chat-message--assistant'} ${message.isError ? 'chat-message--error' : ''}`}
      role="article"
      aria-label={`${isUser ? 'Your' : 'Assistant'} message`}
    >
      {!isUser && (
        <div className="chat-message__avatar" aria-hidden="true">
          🇱🇰
        </div>
      )}
      <div className="chat-message__bubble">
        <div className="chat-message__content">
          {isUser ? (
            <p>{message.content}</p>
          ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
          )}
        </div>
        <div className="chat-message__meta">
          <time className="chat-message__time" dateTime={message.timestamp.toISOString()}>
            {formatTime(message.timestamp)}
          </time>
          {!isUser && !message.isError && (
            <>
              <button
                className="chat-message__copy"
                onClick={handleSpeak}
                aria-label={t.chat.speak}
                type="button"
                title={t.chat.speak}
              >
                🔊
              </button>
              <button
                className="chat-message__copy"
                onClick={handleCopy}
                aria-label={copied ? t.chat.copied : t.chat.copy}
                type="button"
              >
                {copied ? '✓' : '📋'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
