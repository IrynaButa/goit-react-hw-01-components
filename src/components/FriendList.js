import React from 'react';
import Friends from './Friends'

const FriendList = ({friends}) => {
    return (
         <ul>
      {friends.map(friend => (
        
          <Friends
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        
      ))}
    </ul>
    )
}

export default FriendList;