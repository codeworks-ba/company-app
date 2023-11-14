import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { RecoilRoot } from 'recoil';

export const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </RecoilRoot>
  );
};
