import React from 'react';

import friends from './friends.json'

function FriendList() {
    return <>
        <ul className="friend-list">
           <Friend props={friends} />
        </ul>
    </>
};

const Friend = (props) => {
    return <>
        {friends.map((friend) => (
            <li className="item" key = {friend.id}>
                <span className="status">{friend.isOnline}</span>
                <img className="avatar" src={friend.avatar} alt="" width="48" />
                <p className="name">{friend.name}</p>
            </li>
        ))}
    </>
}

export default FriendList;
