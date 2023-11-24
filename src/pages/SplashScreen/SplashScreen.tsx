import axios from 'axios';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/atoms/userState';
import { logInState } from '../../store/atoms/logInState';
import { Status } from '../../routes';
import { TOKEN } from '../../services/token';

type SplashScreenProps = unknown;

export const SplashScreen: React.FC<SplashScreenProps> = () => {
  const [, setUserRecoilState] = useRecoilState(userState);
  const [, setStatusRecoilState] = useRecoilState(logInState);

  const findUser = async () => {
    const token = await TOKEN.get();
    if (token) {
      setStatusRecoilState(Status.LoggedIn);
    } else {
      setUserRecoilState(null);

      setStatusRecoilState(Status.LoggedOut);
    }
  };

  useEffect(() => {
    findUser();
  }, []);

  return (
    <div>
      <h1>SPLASH SCREEN</h1>
    </div>
  );
};
