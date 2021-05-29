import React from 'react';
import defaultImg from '../components/logo.svg'
import PropTypes from 'prop-types'

const Friends = ({avatar, name, status, id}) => {
    return (
<li key={id}>
          <span >{status}</span>
           <img  src={avatar} alt={name} width="48" />
  <p >{name}</p>
        </li>
      
    )
}
Friends.defaultProps = {
  avatar: defaultImg

}

Friends.propTypes = {
    
  avatar:PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status:PropTypes.bool.isRequired,
  

}
export default Friends;