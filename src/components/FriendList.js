import React from 'react';
import Friends from './Friends'

const FriendList = ({friends}) => {
    return (
         <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friends
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
    )
}
export default FriendList;