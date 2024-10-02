// 1. 리액트 모듈
import React from 'react'; //모듈 가져오기 -esm방식
// 2. 리액트 돔 /client 모(17버전 이상)
import ReactDOM from 'react-dom/client';
// 3. 필요한 모듈 가져오기( CSS, 컴포넌트 등등)
import './index.css'; // 전체 스타일
import App from './App'; // APP 컴포넌트 모듈 가져오기(App.js에서 가져옴), App이라는 이름은 컴포넌트명과 다를수 있다.(대표 모듈 가져오기시) 
//(개별은 무조건 객체구조 분해이기 때문에 똑같은 이름을 사용해야 한다) 
import LifeCycle from './form/LifeCycle'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크
import MyInput from './form/MyInput'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";

// 4. 리액트로 만들어진 JSX가 동적으로 추가될 html 상의 최상위 엘리먼트를 복제한 DOM을 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
// 5. v-dom에 JSX를 추가하여 화면을 구성
root.render(
  <React.StrictMode> 
    {/* 잠재된 오류를 체크: 개발단곙에서 사용 => 2번 호출됨  */}
    {/* <ThemeProvider ThemeProvider>  개발용 잠재된 오류까지 체크하며 보여준다. */}
    <App />
    {/* <LifeCycle/>
    <MyInput/> */}
  {/* </ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
