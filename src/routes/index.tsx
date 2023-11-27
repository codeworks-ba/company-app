import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { NewsScreen } from '../pages/NewsScreen/NewsScreen';
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
        <Route path="*" element={<ExploreScreen />} />
        <Route path="/" element={<ExploreScreen />} />
        <Route path="/vijesti" element={<NewsScreen />} />
        <Route path="/pretraga" element={<ExploreScreen />} />
        <Route path="/moj-biznis" element={<MyBusinessScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/components" element={<DummyComponentScreen />} />
      </Routes>
    </>
  );
};
