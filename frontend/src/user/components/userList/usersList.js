import React from 'react';
import './userList.css';
import UserItem from '../userItem/userItem'

const UserList = props => {
    if (props.items.lenght === 0) {
        return (
            <div className="center">
                <h2>No users found.</h2>
            </div>
        );
    }
    return (
        <ul className="users-list">
            {props.items.map(user =>{
                return <UserItem 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.places} />;
            })}
        </ul>
    );
};

export default UserList;