import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "C:/Users/COM/web/frontend/node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginPage from './pages/LoginPage'
import App2 from './App2'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"

// import "C:/Users/COM/web/frontend/src/styles.css";
// import "C:/Users/COM/web/frontend/src/responsive.css";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);