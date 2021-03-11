import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  cod: string;
}
interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  cod: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signOut(): void;
  signIn(credentials: SignInCredentials): Promise<void>;
  updatedUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@KlabinP:token');
    const user = localStorage.getItem('@KlabinP:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ cod, password }) => {
    const response = await api.post('sessions', {
      cod,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@KlabinP:token', token);
    localStorage.setItem('@KlabinP:user', JSON.stringify(user));

    // quando ele loga ele ja vai estar com o token salvado nos headers
    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@KlabinP:token');
    localStorage.removeItem('@KlabinP:user');

    setData({} as AuthState);
  }, []);

  const updatedUser = useCallback(
    (user: User) => {
      localStorage.setItem('@KlabinP:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updatedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
