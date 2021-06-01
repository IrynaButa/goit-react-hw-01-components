import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/statistic/Statistics';
import FriendList from './components/friends/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';

import user from './json/user.json';
import statisticalData from './json/stat-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
	return (
		<div className="container">
			<Profile
				name={user.name}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics title="Upload stats" stats={statisticalData} />
			<FriendList friends={friends} />

			<TransactionHistory items={transactions} />
		</div>
	);
}

export default App;
