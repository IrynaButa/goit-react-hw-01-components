import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Profile from './components/Profile'
import Statistics from './components/Statistics'
import FriendList from './components/FriendList'
import TransactionHistory from './components/TransactionHistory'

import user from './user.json'
import statisticalData from './stat-data.json'
import friends from './friends.json';
import transactions from './transactions.json';


function App() {
  return (

    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        //avatar={user.avatar}
        stats={user.stats}
        
      />
      <Statistics
        title="Upload stats"
        stats={statisticalData}
       
      />
      <FriendList friends={friends} />

      

<TransactionHistory items={transactions} />
  


    
    </div>

    
   
  );
}

export default App;
