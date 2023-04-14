import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HairShop from './pages/HairShop';
import Login from './pages/Login';
import LoginStart from './components/Login/LoginStart';

import Main from './pages/Main';
import MyThing from './pages/MyThing';
import Popular from './pages/Popular';
import Keyword from './pages/Keyword';

import Infrev from './components/MyPage/infRev';
import Bookmark from './components/MyPage/bookMark';

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
        <Route path="/infrev" element={<Infrev />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default Router;
