import React from 'react';
import { useRecoilState } from 'recoil';
import { SplashScreen } from '../pages/SplashScreen/SplashScreen';
import { LoggedInRoutes } from './LoggedInRoutes';
import { LoggedOutRoutes } from './LoggedOutRoutes';
import { logInState } from '../store/atoms/logInState';

export enum Status {
  LoggedIn,
  LoggedOut,
  Stale
}

export const Routes: React.FC = () => {
  const [statusRecoilState] = useRecoilState(logInState);

  if (Status.Stale === statusRecoilState || statusRecoilState === null) {
    return <SplashScreen />;
  }

  const UserRoutes = () => {
    switch (statusRecoilState) {
      case Status.LoggedIn:
        return <LoggedInRoutes />;
      case Status.LoggedOut:
        return <LoggedOutRoutes />;
      default:
        return <SplashScreen />;
    }
  };

  return (
    <>
      <UserRoutes />
    </>
  );
};
