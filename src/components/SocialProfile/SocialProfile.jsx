import React from 'react';

import user from './user.json';

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
  <div className="profile">
  <div className="description">
    <img
            src={avatar}
            alt="Аватар пользователя"
            className="avatar"
            width='150'
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity"> {stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity"> {stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity"> {stats.likes}</span>
    </li>
  </ul>
    </div>)




export default SocialProfile;
