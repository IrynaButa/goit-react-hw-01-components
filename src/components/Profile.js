import React from 'react';
//import user from '../user.json';
import defaultImg from '../components/logo.svg'


const Profile = ({name, avatar, tag, location, stats}) => {
  
  return (
     <div >
  <div >
    <img
      src={defaultImg}
      alt="Аватар пользователя"
      
    />
        <p >Name:{name}</p>
    <p >@{tag}</p>
    <p >{location}</p>
  </div>

  <ul >
    <li>
      <span >Followers</span>
      <span >{stats.followers}</span>
    </li>
    <li>
      <span >Views</span>
          <span >{stats.views}</span>
    </li>
    <li>
      <span >Likes</span>
          <span >{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

Profile.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg"

}
export default Profile;