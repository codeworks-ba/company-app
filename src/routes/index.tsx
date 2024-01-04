import React, { useContext, useEffect } from 'react';
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
import { CreateBusinessScreen } from '../pages/CreateBusiness/CreateBusinessScreen';
import { TestingScreen } from '../pages/DummyComponentScreen/TestingScreen';
import { AdminRoutes } from './adminRoutes';
import { AuthContext } from '../providers/auth/authContext';
import { ReadPostScreen } from '../pages/ReadPostScreen/ReadPostScreen';

export const AppRoutes: React.FC = () => {
  const { user, getMe } = useContext(AuthContext);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Navbar />
      <Routes>
        {!user && (
          <>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </>
        )}
        <Route path="*" element={<ExploreScreen />} />
        <Route path="/" element={<ExploreScreen />} />
        <Route path="/vijesti" element={<NewsScreen />} />
        <Route path="/vijesti/:id" element={<ReadPostScreen />} />
        <Route path="/pretraga" element={<ExploreScreen />} />
        <Route path="/moj-biznis" element={<MyBusinessScreen />} />
        <Route path="/biznis/:id" element={<BusinessScreen />} />
        <Route path="/biznis/novi" element={<CreateBusinessScreen />} />
        <Route path="/components" element={<DummyComponentScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/testing" element={<TestingScreen />} />
        {user && user.role === 'admin' && (
          <Route path="/admin/*" element={<AdminRoutes />} />
        )}
      </Routes>
    </div>
  );
};
