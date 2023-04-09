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
import Keyword from './pages/Keyword';

type Props = {
  children: JSX.Element;
};

const Router = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/LoginStart" element={<LoginStart />} />
        <Route path="/hairshop" element={<HairShop />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mything" element={<MyThing />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/keyword" element={<Keyword />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default Router;
