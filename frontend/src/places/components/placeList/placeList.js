import React from 'react';
import Card from '../../../shared/components/uiElements/card/card';
import PlaceItem from '../placeItem/placeItem';
import Button from '../../../places/components/placeList/placeList'
import './plaseList.css';

const PlaceList = props => {
    if (props.items.lenght === 0) {
      return (
        <div className="place-list center">
          <Card>
            <h2>No places found. Maybe create one?</h2>
            <Button to="/places/new">Share Place</Button>
          </Card>
        </div>
      );
    }
  
    return (
      <ul className="place-list">
        {props.items.map(place => (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          />
        ))}
      </ul>
    );
  };
  
  export default PlaceList;
  