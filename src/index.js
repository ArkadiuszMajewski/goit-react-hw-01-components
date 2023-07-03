import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/App';
import './index.css';
import data from '../src/user.json';
export const user = data;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);
