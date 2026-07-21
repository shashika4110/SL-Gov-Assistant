import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 35000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sl-gov-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('sl-gov-token');
      localStorage.removeItem('sl-gov-user');
    }
    return Promise.reject(error);
  }
);

export interface ApiUser {
  _id: string;
  name: string;
  email: string;
  preferredLanguage: 'en' | 'si' | 'ta';
  role: string;
}

export interface AuthResponse {
  success: boolean;
  data: { user: ApiUser; token: string };
}

export interface ChatResponse {
  success: boolean;
  data: { reply: string; sessionId?: string };
}

export interface Office {
  _id: string;
  name: { en: string; si?: string; ta?: string };
  department: string;
  address: string;
  city: string;
  phone?: string;
  website?: string;
  location: { coordinates: [number, number] };
}
