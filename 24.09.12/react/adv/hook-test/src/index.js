import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 실습 2분 App2.js를 만드시오(내용도 기본값으로 채우기, 훅사용)
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App3리펙토링 from './App3리펙토링';
import App6 from './App6';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App6/>
    {/* <App3 name="훅" url="https://fakestoreapi.com/products" pid="1"/> */}
    {/* <App3리펙토링 name="훅" url="https://fakestoreapi.com/products" pid="1"/> */}
    {/* <App2 name="훅" url="https://fakestoreapi.com/products" pid="1"/> */}
    {/* <App name="훅"/> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();