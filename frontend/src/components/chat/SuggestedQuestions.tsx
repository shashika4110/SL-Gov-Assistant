import { getTranslation } from '../../i18n/translations';
import { useLanguage } from '../../hooks/useLanguage';
import './SuggestedQuestions.css';

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  disabled?: boolean;
}

export function SuggestedQuestions({ onSelect, disabled }: SuggestedQuestionsProps) {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <div className="suggested-questions">
      <p className="suggested-questions__title">{t.chat.suggestedQuestions}</p>
      <div className="suggested-questions__grid">
        {t.suggestedQuestions.map((question) => (
          <button
            key={question}
            className="suggested-questions__chip"
            onClick={() => onSelect(question)}
            disabled={disabled}
            type="button"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
