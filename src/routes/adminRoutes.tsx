import React from 'react';
import { AdminNavbar } from '../components/Navbar/AdminNavbar/AdminNavbar';
import { Route, Routes } from 'react-router-dom';
import { CreatePostsScreen } from '../pages/AdminScreens/CreatePostsScreen/CreatePostsScreen';
import { VerifyScreen } from '../pages/AdminScreens/VerifyBusinessesScreen/VerifyBusinessesScreen';
import { AdminScreenWrapper } from '../components/ScreenWrapper/AdminScreenWrapper/AdminScreenWrapper';
import { ScreenWrapper } from '../components/ScreenWrapper/ScreenWrapper';

export const AdminRoutes: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '40px' }}>
      <AdminNavbar />
      <Routes>
        <Route path="*" element={<VerifyScreen />} />
        <Route path="/dodaj-vijest" element={<CreatePostsScreen />} />
        <Route path="/verifikuj-biznis" element={<VerifyScreen />} />
      </Routes>
    </div>
  );
};
