import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WelcomeScreen } from '../pages/WelcomeScreen/WelcomeScreen';

export const LoggedInRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<WelcomeScreen />} />
    </Routes>
  );
};
