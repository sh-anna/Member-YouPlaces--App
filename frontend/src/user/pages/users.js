import React from 'react';
import UserList from '../components/userList/usersList';


const Users = () => {
    const USERS = [
        {
            id: 'ul', 
            name: 'Anna Sharipkin', 
            image: 'https://cdn2.iconfinder.com/data/icons/solid-style-for-ui/32/user_smile_friendly-512.png', 
            places: 5
        }
    ];

    return <UserList items={USERS} />;
};

export default Users;

