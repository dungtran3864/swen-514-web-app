import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const mysql = require('mysql');
const con = mysql.createConnection({
    host     : 'blizzard-database.cbxhylxbhyt6.us-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'Goteam514!',
    port     : 3306
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
