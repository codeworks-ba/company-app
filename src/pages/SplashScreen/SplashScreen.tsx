import axios from 'axios';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/atoms/userState';
import { logInState } from '../../store/atoms/logInState';
import { Status } from '../../routes';

type SplashScreenProps = unknown;

export const SplashScreen: React.FC<SplashScreenProps> = () => {
  const [, setUserRecoilState] = useRecoilState(userState);
  const [, setStatusRecoilState] = useRecoilState(logInState);

  const loginUser = async () => {
    axios
      .post('http://localhost:3000/auth/login', {
        email: 'dzanin@mail.com',
        password: 'dzanin1234'
      })
      .then(function (response) {
        if (response.data.user) {
          setUserRecoilState(response.data.user);
          setStatusRecoilState(Status.LoggedIn);
        } else {
          setUserRecoilState(null);
          setStatusRecoilState(Status.LoggedOut);
        }
      })
      .catch(function (error) {
        setUserRecoilState(null);
        setStatusRecoilState(Status.LoggedOut);
      });
  };

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <div>
      <h1>SPLASH SCREEN</h1>
    </div>
  );
};
