export type Language = 'en' | 'si' | 'ta';

export interface LocalizedText {
  en: string;
  si: string;
  ta: string;
}

export interface ServiceStep {
  title: LocalizedText;
  description: LocalizedText;
}

export interface GovernmentService {
  id: string;
  icon: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  overview: LocalizedText;
  requiredDocuments: LocalizedText[];
  steps: ServiceStep[];
  processingTime: LocalizedText;
  importantNotes: LocalizedText[];
  officialLink?: string;
  keywords: string[];
}

export interface FAQ {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
  category: string;
}

export interface ContactInfo {
  id: string;
  name: LocalizedText;
  phone?: string;
  email?: string;
  website?: string;
  description: LocalizedText;
  isEmergency?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isError?: boolean;
}

export type ErrorType = 'network' | 'api' | 'empty' | 'timeout' | 'unknown';

export interface AppError {
  type: ErrorType;
  message: string;
}
