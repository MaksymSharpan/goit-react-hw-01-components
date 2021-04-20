import React from 'react';
import PropTypes from 'prop-types';
import user from './user.json';

import style from './SocialProfile.module.scss'

function SocialProfile() {
    return <>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
       />
    </>
};

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={style.profile}>
  <div className={style.description}>
    <img 
            src={avatar}
            alt="Аватар пользователя"
            className={style.avatar}
            width='150'
    />
    <p className={style.name}>{name}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul className={style.stats}>
    <li className = {style.item}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}> {stats.followers}</span>
    </li>
    <li className = {style.item}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}> {stats.views}</span>
    </li>
    <li className = {style.item}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}> {stats.likes}</span>
    </li>
  </ul>
  </div>)
    
Profile.defaultProps = {
  name: 'Maksym',
  location: 'Kyiv',
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })

};





export default SocialProfile;
