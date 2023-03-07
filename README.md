# 💜 HowHair - Frontend 💜

## 🔉 프로젝트 소개

> 헤어샵 리뷰를 작성 및 조회하고, 본인에게 맞는 헤어스타일을 추천받아 헤어 시술 고민을 도와주는 서비스

<br />

## 💻 핵심 기능

1️⃣ 헤어샵 리뷰 작성 및 조회, 북마크 기능

2️⃣ 자신에게 맞는 헤어스타일 추천 기능

3️⃣ 필터를 적용한 리뷰 조회 기능

4️⃣ 지역별 헤어샵 조회 기능

---

<br />

## 👩🏻‍💻 프론트엔드 팀원 소개

|                                      박현지                                      |                                      노소희                                       |
| :------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/73213437?v=4" width="200px" /> | <img src="https://avatars.githubusercontent.com/u/109736890?v=4" width="200px" /> |
|                      [@iamphj3](https://github.com/iamphj3)                      |                      [@SO-HUII](https://github.com/SO-HUII)                       |

---

<br />

## ⚒️ 기술 스택

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| Data Fetching        | ![Data Fetching](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                                                                                                        |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Package Manager      | ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)                                                                                                            |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |

---

<br />

## ✅ 커밋 컨벤션

| 제목        | 내용                                                                             |
| ----------- | -------------------------------------------------------------------------------- |
| init        | 작업 세팅 커밋 (패키지 설치 등)                                                  |
| feat        | 새로운 기능을 추가할 경우                                                        |
| style       | 기능에 영향을 주지 않는 커밋, 코드 순서, css등의 포맷에 관한 커밋                |
| fix         | 버그를 고친 경우                                                                 |
| refactor    | 프로덕션 코드 리팩토링                                                           |
| docs        | 문서를 수정한 경우, 파일 삭제, 파일명 수정 등 ex) README.md                      |
| chore       | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우, 주석 추가, 자잘한 문서 수정 |
| code review | 코드 리뷰 반영                                                                   |

---

<br />

## 📦 폴더구조

```
📦
├─ .eslintrc
├─ .gitignore
├─ .prettierrc
├─ .vscode
│  └─ setting.json
├─ README.md
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ src
│  ├─ Router.js
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ index.js
│  │  │  └─ logo.svg
│  │  └─ images
│  │     ├─ index.js
│  │     └─ style_1.png
│  ├─ components
│  │  ├─ Login
│  │  │  └─ Login.jsx
│  │  ├─ Main
│  │  │  └─ Main.jsx
│  │  └─ common
│  │     └─ Error404.jsx
│  ├─ index.js
│  ├─ lib
│  │  ├─ api
│  │  │  └─ api.js
│  │  ├─ axios.js
│  │  └─ hooks
│  │     └─ .keep
│  ├─ pages
│  │  ├─ HairShop.jsx
│  │  ├─ Login.jsx
│  │  └─ Main.jsx
│  └─ styles
│     ├─ globalStyle.js
│     ├─ style.d.ts
│     └─ theme.js
└─ yarn.lock
```
