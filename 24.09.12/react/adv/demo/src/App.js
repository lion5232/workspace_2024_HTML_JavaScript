// 컴포넌트
//1. ESM 방식으로 모듈 가져오기

// import logo from './logo.svg';
import './App.css';
// import LifeCycle from './form/LifeCycle'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크
// import MyInput from './form/MyInput'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크
// import MyCheckBox from './form/MyCheckBox'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크
// import MySelect from './form/MySelect'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크

import {
  LifeCycle,
  MyInput,
  MyCheckBox,
  MySelect
} from './form';

// 2. 함수형 컴포넌트 구성
function App() {
  //JSX를 리턴 => render()
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <header >
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <LifeCycle/>
        <MyInput/> 
        <MyCheckBox label="여행지선택"/>
        {/* 언어를 선택할 수 있고, 기본 선택은 '리액트는 랭귀지 아님'가 된다. */}
        <MySelect languages={['자바','자바스크립트','리액트는 랭귀지 아님']} initValue='리액트는 랭귀지 아님' />

      </header>
    </div>
  );
}

// 3. ESM 방식의 모듈화 
// 대표모듈로 App이라는 컴포넌트를 지정
export default App;

//일반 모듈은 {App} 
