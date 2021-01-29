import React from 'react';
import Input from '../../shared/components/formElements/input/input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './newPlacec.css';
const NewPlace = () => {
    
    return <form className="plase-form">
        <Input 
        element="input" 
        type="text" 
        label="title" 
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."/>

    </form>;
    
};

export default NewPlace;
