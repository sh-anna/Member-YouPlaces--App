import React from 'react';
import Card from '../../../shared/components/uiElements/card/card';
import PlaceItem from '../placeItem/placeItem';
import './plaseList.css'

const PlaceList = props => {
    if (props.items.lenght === 0) {
        return (
            <div className= "place-list center">
                <Card>
                    <h2>No places found. Maybe create one?</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        );
    }
    return <ul className="place-list">
        {props.items.map(place => 
            <PlaceItem key={ place.id } 
            image={ place.imageURL } 
            title={place.title} 
            description={place.description} 
            adress={place.address} 
            creatorId={place.creator} 
            coordinator={place.location} />
        )}   
    </ul>
};
 
export default PlaceList;