import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from "./main_page/main_page";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <head>
          <link href="//db.onlinewebfonts.com/c/efd2c83c0903c21ebe65d4fc8c2ef5bb?family=PopulaireW00-Regular" rel="stylesheet" type="text/css"/>
      </head>
    <MainPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
