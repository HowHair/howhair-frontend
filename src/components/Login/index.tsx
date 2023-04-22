/* eslint-disable prettier/prettier */
import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import { ButtomButton } from '../common/Button/ButtomButton';
import { Header } from '../common/Header';
import LoginStart from './LoginStart';
import LoginGender from './LoginGender';
import LoginHairLength from './LoginHairLength';
import LoginHairPerm from './LoginHairPerm';
import theme from '../../styles/theme';
import axios from 'axios';

const LoginComponent = () => {
  const [myPageData, setMyPageData] = useState<MyPageProps>({gender: 'FEMALE', hairLength: 'UNDEREAR', hairPerm: 'CURL'});
  const [page, setPage] = useState<number>(0);
  // console에 myPageData 변경 내용 잘 적용되는지 확인
  // console.log(myPageData);

  // step 1,2와 3의 바텀 버튼의 역할이 다르니 구분해 줘야할듯. 변수처럼 만들어서?
  // step 1,2 바텀 버튼은 그저 다음 페이지로 넘겨주는 역할 step 3은 1,2,3의 선택 데이터를 서버에 저장하는 역할을 해야함
  // const nextPageButton = <ButtomButton onClick={() => setPage((page) => page + 1)}>다음 단계</ButtomButton>;

  // start ~ step 1,2,3 page
  if(page > 0) return (
    <div style={stepDivStyle}>
      <Header onClickBack={() => setPage((page) => page - 1)}/>
      {page === 1 ? 
      <LoginStart /> :
        page === 2 ?
        // <LoginGender myPageData={myPageData} setMyPageData={setMyPageData} bottomButton={nextPageButton}/>
        <LoginGender myPageData={myPageData} setMyPageData={setMyPageData} /> :
        page === 3 ?
          <LoginHairLength myPageData={myPageData} setMyPageData={setMyPageData} /> :
        page === 4 ?
          <LoginHairPerm myPageData={myPageData} setMyPageData={setMyPageData}/> :
        null}
        <ButtomButton onClick={() => setPage((page) => page + 1)}>다음 단계</ButtomButton>
    </div>
  )
  return (
    // Login page
    <BackGroundStyle>
      <div style={divStyle}>
            <img src="/images/Howhair_Logo.png" alt="로고" style={imgStyle} />
            <PTitle>
              <p style={pStyle}>
                그 미용실 어때? <br />
                내가 하려는 머리타일의 자세한 리뷰들 부터 <br />
                헤어 스타일에 맞는 스타일 추천까지!
              </p>
            </PTitle>
          <button type="button" style={buttonStyle} onClick={() => setPage(1)}>
            카카오 계정으로 로그인
          </button>
          <a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=f90395304e9de3e92804ea7e23c1bd4f&redirect_uri=http://localhost:3000/loginstart">카카오 로그인</a>
      </div>
    </BackGroundStyle>
  );
};

export default LoginComponent;

// const Login = () => {
//   axios({
//     method: "get",
//     url: "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=f90395304e9de3e92804ea7e23c1bd4f&redirect_uri=http://localhost:3007/LoginStart",
//   })
//   .then((res) => {
//     console.log(res);
//   })
// };

// Style
const divStyle: CSSProperties = {
  position: 'relative',
  textAlign: 'center',
  // marginTop: '200px',
  height: '100%',
};

const pStyle: CSSProperties = {
  textAlign: 'center',
  color: '#363636',
  marginTop: '100px',
  marginBottom: '100px',
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

const stepDivStyle: CSSProperties = {
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // flexDirection: 'row',
  textAlign: 'center',
};

const imgStyle: CSSProperties = {
  width: '210px',
  height: '111px',
};

const PTitle = styled.div`
  ${theme.fonts.Pretendard_Caption1_Medium_16}
`;

const BackGroundStyle = styled.div`
  background-color: ${theme.colors.fourth};
`;