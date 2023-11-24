import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../pages/LoginScreen/LoginScreen';
import { RegisterScreen } from '../pages/RegisterScreen/RegisterScreen';
import { DummyComponentScreen } from '../pages/DummyComponentScreen/DummyComponentScreen';

export const LoggedOutRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/components" element={<DummyComponentScreen />} />
    </Routes>
  );
};
