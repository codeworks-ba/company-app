import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { WelcomeScreen } from '../pages/WelcomeScreen/WelcomeScreen';
import { ExploreScreen } from '../pages/ExploreScreen/ExploreScreen';
import { MyBusinessScreen } from '../pages/MyBusinessScreen/MyBusinessScreen';
import { LoginScreen } from '../pages/LoginScreen/LoginScreen';
import { RegisterScreen } from '../pages/RegisterScreen/RegisterScreen';
import { DummyComponentScreen } from '../pages/DummyComponentScreen/DummyComponentScreen';

export enum Status {
  LoggedIn,
  LoggedOut,
  Stale
}

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<WelcomeScreen />} />
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route path="/my-business" element={<MyBusinessScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/components" element={<DummyComponentScreen />} />
      </Routes>
    </>
  );
};
