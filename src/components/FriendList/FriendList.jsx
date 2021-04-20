import React from 'react';
import PropTypes from 'prop-types';
import friends from './friends.json'

import style from './FriendList.module.scss'

function FriendList() {
    return <>
        <ul className={style.friendList}>
           <Friend props={friends} />
        </ul>
    </>
};

const Friend = (props) => {
    return <>
        {friends.map((friend) => (
            <li className={style.item} key = {friend.id}>
                <span className={style.status}>{friend.isOnline ? 'Online' : 'Offline'}</span>
                <img className="avatar" src={friend.avatar} alt="" width="48" />
                <p className="name">{friend.name}</p>
            </li>
        ))}
    </>
}



// Friend.defaultProps = {
    
// }

// Friend.PropTypes = {

// }

export default FriendList;
