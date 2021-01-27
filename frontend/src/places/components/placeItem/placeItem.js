import React from 'react';
import Card from '../../../shared/components/uiElements/card/card';
import './placeItem.css';

const PlaseItem = props => {
    return (
        <li className="place-item">
            <Card clasName="place-item__content">
                <div clasName="place-item__image">
                    <img src={props.image} alt="props-title" />
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.adress}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions">
                    <button>View On Map</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </Card>
        </li>
    )
}
 
export default PlaseItem;