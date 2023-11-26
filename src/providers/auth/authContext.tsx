import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react';
import { TOKEN } from '../../services/token';
import { CreateUserDto, LoginUserDto, UserDto } from '../../services/types';

export type AuthContextProps = {
  loggedIn?: boolean;
  isLoading?: boolean;
  user?: UserDto;
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
  const [user, setUser] = useState<UserDto>();

  const signIn = () => {};

  const getMe = () => {};

  const signUp = () => {};

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
