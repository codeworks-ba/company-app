import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react';
import { TOKEN } from '../../services/token';
import {
  AuthResponseDto,
  AuthUser,
  CreateUserDto,
  LoginUserDto,
  UserDto
} from '../../services/types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { config } from '../../config/config';

export type AuthContextProps = {
  loggedIn?: boolean;
  isLoading?: boolean;
  user?: AuthUser;
  signIn: (data: LoginUserDto) => void;
  signOut: () => void;
  signUp: (data: CreateUserDto) => void;
  getMe: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
  getMe: () => {}
});

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<AuthUser>();
  const navigate = useNavigate();

  const signIn = (data: LoginUserDto) => {
    axios
      .post(`http://localhost:3000/auth/login`, data) //OVO TREBA PROMJENITI
      .then(function (response) {
        if (response.data.user) {
          TOKEN.set((response.data as AuthResponseDto).token);
          setUser((response.data as AuthResponseDto).user);
          navigate('vijesti');
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  const getMe = () => {
    axios
      .get(`http://localhost:3000/auth/get-me`, {
        headers: { Authorization: `Bearer ${TOKEN.get()}` }
      })
      .then(function (response) {
        if (response.data) {
          setUser(response.data as AuthUser);
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  // ${config.API_URL} <--------- OVO

  const signUp = (data: CreateUserDto) => {
    axios
      .post(`http://localhost:3000/auth/`, data)
      .then(function (response) {
        if (response.data.user) {
          TOKEN.set((response.data as AuthResponseDto).token);
          setUser((response.data as AuthResponseDto).user);
          navigate('vijesti');
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  const signOut = () => {
    TOKEN.remove();
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn: !!user, user, signIn, signUp, signOut, getMe }}
    >
      {children}
    </AuthContext.Provider>
  );
};
