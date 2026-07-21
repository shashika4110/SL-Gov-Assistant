import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChatMessage } from '../components/chat/ChatMessage';
import { ChatInput } from '../components/chat/ChatInput';
import { TypingIndicator } from '../components/chat/TypingIndicator';
import { SuggestedQuestions } from '../components/chat/SuggestedQuestions';
import { Button } from '../components/ui/Button';
import { useChat } from '../hooks/useChat';
import { useAutoScroll } from '../hooks/useAutoScroll';
import { useLanguage } from '../hooks/useLanguage';
import { getTranslation } from '../i18n/translations';
import './Chat.css';

export function ChatPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const { messages, isLoading, sendMessage, clearChat } = useChat(language);
  const [searchParams] = useSearchParams();
  const bottomRef = useAutoScroll([messages, isLoading]);
  const initialQuerySent = useRef(false);

  // Handle pre-filled question from URL (?q=...)
  useEffect(() => {
    const q = searchParams.get('q');
    if (q && !initialQuerySent.current && messages.length === 0) {
      initialQuerySent.current = true;
      sendMessage(q);
    }
  }, [searchParams, messages.length, sendMessage]);

  const showSuggestions = messages.length === 0 && !isLoading;

  return (
    <div className="page chat-page">
      <header className="chat-page__header">
        <div className="container chat-page__header-inner">
          <div>
            <h1 className="chat-page__title">{t.chat.title}</h1>
            <p className="chat-page__subtitle">{t.chat.subtitle}</p>
          </div>
          {messages.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearChat} className="chat-page__clear">
              {t.chat.clear}
            </Button>
          )}
        </div>
      </header>

      <div className="chat-page__messages" role="log" aria-live="polite" aria-label="Chat messages">
        <div className="chat-page__messages-inner">
          {showSuggestions && (
            <div className="chat-page__welcome">
              <div className="chat-page__welcome-avatar" aria-hidden="true">🇱🇰</div>
              <p className="chat-page__welcome-text">{t.chat.welcome}</p>
            </div>
          )}

          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}

          {isLoading && (
            <div className="chat-message chat-message--assistant">
              <div className="chat-message__avatar" aria-hidden="true">🇱🇰</div>
              <div className="chat-message__bubble">
                <TypingIndicator />
                <span className="sr-only">{t.chat.thinking}</span>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {showSuggestions && (
        <SuggestedQuestions onSelect={sendMessage} disabled={isLoading} />
      )}

      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </div>
  );
}
