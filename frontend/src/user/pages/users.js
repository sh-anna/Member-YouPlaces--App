import React from 'react';
import UserList from '../components/userList/usersList';


const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Anna Sharipkin', 
            image: 'https://i.pinimg.com/280x280_RS/2f/ed/0a/2fed0a6eaf646478fe87db5159d85c2c.jpg', 
            places: 5
        }
    ];

    return <UserList items={USERS} />;
};

export default Users;

