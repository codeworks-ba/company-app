import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { NewsScreen } from '../pages/NewsScreen/NewsScreen';
import { ExploreScreen } from '../pages/ExploreScreen/ExploreScreen';
import { MyBusinessScreen } from '../pages/MyBusinessScreen/MyBusinessScreen';
import { LoginScreen } from '../pages/LoginScreen/LoginScreen';
import { RegisterScreen } from '../pages/RegisterScreen/RegisterScreen';
import { DummyComponentScreen } from '../pages/DummyComponentScreen/DummyComponentScreen';
import { BusinessScreen } from '../pages/BusinessScreen/BusinessScreen';
import { ProfileScreen } from '../pages/ProfileScreen/ProfileScreen';

export enum Status {
  LoggedIn,
  LoggedOut,
  Stale
}

export const AppRoutes: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="*" element={<ExploreScreen />} />
        <Route path="/" element={<ExploreScreen />} />
        <Route path="/vijesti" element={<NewsScreen />} />
        <Route path="/pretraga" element={<ExploreScreen />} />
        <Route path="/moj-biznis" element={<MyBusinessScreen />} />
        <Route path="/biznis" element={<BusinessScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/components" element={<DummyComponentScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
};
