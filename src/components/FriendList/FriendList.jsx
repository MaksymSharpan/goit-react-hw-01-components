import React from 'react';
import PropTypes from 'prop-types';

import style from './FriendList.module.scss';

function FriendList({ friends }) {
  const listElements = friends.map(friend => (
    <li className={style.item} key={friend.id}>
      <span className={style.status}>
        {friend.isOnline ? 'Online' : 'Offline'}
      </span>
      <img className="avatar" src={friend.avatar} alt="" width="48" />
      <p className="name">{friend.name}</p>
    </li>
  ));
  return (
    <>
      <ul className={style.friendList}>{listElements}</ul>
    </>
  );
}

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default FriendList;
