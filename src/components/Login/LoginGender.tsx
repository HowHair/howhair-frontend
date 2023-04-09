import React, { CSSProperties, Dispatch, SetStateAction } from 'react';

const buttonData = [
  { gender: 'FEMALE', text: '여성' },
  { gender: 'MALE', text: '남성' },
];

const LoginGender = ({
  myPageData,
  setMyPageData,
}: {
  myPageData: MyPageProps;
  setMyPageData: Dispatch<SetStateAction<MyPageProps>>;
}) => {
  const handleClick = (key: string, gender: string) => {
    setMyPageData({ ...myPageData, [key]: gender });
  };

  return (
    <>
      {buttonData.map(button => (
        <button
          key={button.gender}
          style={
            myPageData.gender === button.gender
              ? afClickBtnStyle
              : bfClickBtnStyle
          }
          onClick={() => handleClick('gender', button.gender)}
        >
          {button.text}
        </button>
      ))}
    </>
  );
};
export default LoginGender;

const bfClickBtnStyle: CSSProperties = {
  width: '135px',
  height: '142px',
  backgroundColor: '#FFFFFF',
  color: '#131313',
  textAlign: 'center',
};

const afClickBtnStyle: CSSProperties = {
  width: '135px',
  height: '142px',
  backgroundColor: '#7C00DE',
  color: '#F8F8F8',
  textAlign: 'center',
};
