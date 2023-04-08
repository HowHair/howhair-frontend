import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HairShop from './pages/HairShop';
import Login from './pages/Login';
import Main from './pages/Main';
import MyThing from './pages/MyThing';
import Popular from './pages/Popular';
import Keyword from './pages/Keyword';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hairshop" element={<HairShop />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mything" element={<MyThing />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/keyword" element={<Keyword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
