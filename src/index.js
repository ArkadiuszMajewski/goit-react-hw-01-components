import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/task01';
import { Statistics } from './components/task02';
import './index.css';
import data from './components/json/user.json';
import data2 from './components/json/data.json';
export const user = data;
export const stat = data2;
console.log(stat);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics />
  </React.StrictMode>
);
