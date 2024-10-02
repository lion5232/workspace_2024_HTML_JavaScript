import logo from './logo.svg';
import './App.css';
// import {
//   useState,   // 상태 변수 대체체
 
// } from 'react';

import Reducer from './hook-sample/Reducer';
import CusHook from './custom-hook/CusHook';
import Counter from './zustand-sample/Counter';
import AvataCom from './css/AvataCom';
import TWCom from './css/TWCom'; // 다른 스타일에 영향을 미침 (단독 사용 추천)


function App() {
   
  
  return (
    <div className="App">
      <AvataCom />
      <CusHook />
      <Reducer /> 
      {/* 사용자 정의 컴포넌트 대문자로 시작 하니까 */}
      <Counter />

    </div>
  );
}

export default App;
