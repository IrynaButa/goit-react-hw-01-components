import React from 'react';
import Friends from './Friends'
import PropTypes from 'prop-types'

const FriendList = ({friends}) => {
    return (
         <ul>
        {friends.map((friend) => (
        
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
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;