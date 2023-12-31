import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/task01/task01';
import { Statistics } from './components/task02/task02';
import { FriendList } from './components/task03/task03';
import { TransactionHistory } from './components/task04/task04';
import './index.css';
import data from './components/json/user.json';
import stats from './components/json/data.json';
import friends from './components/json/friends.json';
import transactions from './components/json/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile user={data} />
    <Statistics title="Upload stats" stats={stats} />
    <FriendList friends={friends} />;
    <TransactionHistory transactions={transactions} />
  </React.StrictMode>
);
