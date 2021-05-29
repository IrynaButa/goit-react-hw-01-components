import React from 'react';


const Friends = ({avatar, name, status, id}) => {
    return (
<div key={id}>
          <span >{status}</span>
           <img  src={avatar} alt={name} width="48" />
  <p >{name}</p>
        </div>
      
    )
}
export default Friends;