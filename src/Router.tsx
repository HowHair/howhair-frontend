import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HairShop from './pages/HairShop';
import Login from './pages/Login';
import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=" " element={<Login />} />
        <Route path="/hairshop" element={<HairShop />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
