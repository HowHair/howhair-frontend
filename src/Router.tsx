import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HairShop from './pages/HairShop';
import Login from './pages/Login';
import LoginGender from './components/Login/LoginGender';
import LoginHairLength from './components/Login/LoginHairLength';
import LoginHairPerm from './components/Login/LoginHairPerm';
import LoginStart from './components/Login/LoginStart';

import Main from './pages/Main';
import MyThing from './pages/MyThing';
import Popular from './pages/Popular';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=" " element={<Login />} />
        <Route path="/LoginGender" element={<LoginGender />} />
        <Route path="/LoginHairLength" element={<LoginHairLength />} />
        <Route path="/LoginHairPerm" element={<LoginHairPerm />} />
        <Route path="/LoginStart" element={<LoginStart />} />
        <Route path="/hairshop" element={<HairShop />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mything" element={<MyThing />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
