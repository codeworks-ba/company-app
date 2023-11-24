import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WelcomeScreen } from '../pages/WelcomeScreen/WelcomeScreen';
import { Navbar } from '../components/Navbar/Navbar';
import { ExploreScreen } from '../pages/ExploreScreen/ExploreScreen';
import { MyBusinessScreen } from '../pages/MyBusinessScreen/MyBusinessScreen';

export const LoggedInRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<WelcomeScreen />} />
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route path="/my-business" element={<MyBusinessScreen />} />
      </Routes>
    </>
  );
};
