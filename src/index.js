import React from 'react';
import ReactDOM from 'react-dom/client'; //react library to talk to web browser
import './index.css';//for styling
import App from './App'; //component u created in app.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//this is bridge between app.js and web browser