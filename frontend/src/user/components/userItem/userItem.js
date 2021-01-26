import React from 'react';
import { Link } from 'react-router-dom';
import './userItem.css';
import Avatar from "../../../shared/components/uiElements/avatar/avatar"
import Card from "../../../shared/components/uiElements/card/card"

const UserItem = props => {
    return(
        <li className="users-item">
            <Card>
                <Link to={`/${props.id}/places`}>
                    <div className="user-item_image">
                        <Avatar image={props.image} alt={props.name}  />
                    </div>
                    <div className="user-item_info">
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                    </div>
                </Link>
            </Card>
        </li>
        );
};


export default UserItem;