/* eslint-disable prettier/prettier */
import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import LogoImgLoad from '../common/LogoImg';
import { ButtomButton } from '../common/Button/ButtomButton';
import { Header } from '../common/Header';
import LoginStart from './LoginStart';
import LoginGender from './LoginGender';
import LoginHairLength from './LoginHairLength';
import LoginHairPerm from './LoginHairPerm';
// import logo from '/images/Howhair_Logo.png';

const LoginComponent = () => {
  const [myPageData, setMyPageData] = useState<MyPageProps>({gender: 'FEMALE', hairLength: 'UNDEREAR', hairPerm: 'CURL'});
  const [page, setPage] = useState<number>(0);
  
  if(page > 0) return (
    <div style={divStyle}>
      <Header onClickBack={() => setPage((page) => page - 1)}/>
      {page === 1 ? 
      <LoginStart /> :
        page === 2 ?
        <LoginGender myPageData={myPageData} setMyPageData={setMyPageData}/> :
        page === 3 ?
          <LoginHairLength myPageData={myPageData} setMyPageData={setMyPageData}/> :
        page === 4 ?
          <LoginHairPerm myPageData={myPageData} setMyPageData={setMyPageData}/> :
        null}
      <ButtomButton onClick={() => setPage((page) => page + 1)}>다음 단계</ButtomButton>
    </div>
  )
  return (
    <div style={divStyle}>
      <div>
        <LogoImgLoad />
        <p style={pStyle}>
          그 미용실 어때? <br />
          내가 하려는 머리타일의 자세한 리뷰들 부터 <br />
          헤어 스타일에 맞는 스타일 추천까지!
        </p>

        {/* 카카오톡 로그인 버튼 */}
        <button type="button" style={buttonStyle} onClick={() => setPage(1)}>
          카카오 계정으로 로그인
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;

const StLoginWrapper = styled.div`
  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.fonts.Pretendard_Title1_ExtraBold_24};
`;

const divStyle: CSSProperties = {
  position: 'relative',
  textAlign: 'center',
  height: '100%',
};

const pStyle: CSSProperties = {
  textAlign: 'center',
  color: '#363636',
};

const buttonStyle: CSSProperties = {
  width: '300px',
  height: '50px',
  backgroundColor: '#F9E000',
  borderRadius: '50px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#332525',
  border: 'none',
};
