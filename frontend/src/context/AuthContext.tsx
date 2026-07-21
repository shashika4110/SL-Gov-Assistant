import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { api, type ApiUser, type AuthResponse } from '../services/api';

interface AuthContextType {
  user: ApiUser | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, preferredLanguage?: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const TOKEN_KEY = 'sl-gov-token';
const USER_KEY = 'sl-gov-user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<ApiUser | null>(() => {
    try {
      const stored = localStorage.getItem(USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!token || user) return;
    api.get('/auth/me').then(({ data }) => {
      setUser(data.data.user);
      localStorage.setItem(USER_KEY, JSON.stringify(data.data.user));
    }).catch(() => {
      setUser(null);
      setToken(null);
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    });
  }, [token, user]);

  const persistAuth = (authData: AuthResponse['data']) => {
    setUser(authData.user);
    setToken(authData.token);
    localStorage.setItem(TOKEN_KEY, authData.token);
    localStorage.setItem(USER_KEY, JSON.stringify(authData.user));
  };

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { data } = await api.post<AuthResponse>('/auth/login', { email, password });
      persistAuth(data.data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(
    async (name: string, email: string, password: string, preferredLanguage = 'en') => {
      setIsLoading(true);
      try {
        const { data } = await api.post<AuthResponse>('/auth/register', {
          name,
          email,
          password,
          preferredLanguage,
        });
        persistAuth(data.data);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: Boolean(token && user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
