import React from 'react';
import './userItem.css';


const UserItem = props => {
    return(
        <li className="users-item">
            <div className="user-item_content">
                <div className="user-item_image">
                    <img srs={props.image} alt={props.name}  />
                </div>
                <div className="user-item_info">
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                </div>
            </div>
        </li>
        );
};


export default UserItem;