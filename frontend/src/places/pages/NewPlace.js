import React from 'react';
import Input from '../../shared/components/formElements/input/input';
import './newPlacec.css';
const NewPlace = () => {
    
    return <form className="plase-form">
        <Input element="input" type="text" label="title" validators={[]}
        errorText="Please enter a valid title."/>

    </form>;
    
};

export default NewPlace;
