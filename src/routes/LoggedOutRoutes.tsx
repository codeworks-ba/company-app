import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../pages/LoginScreen/LoginScreen';

export const LoggedOutRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginScreen />} />
    </Routes>
  );
};
