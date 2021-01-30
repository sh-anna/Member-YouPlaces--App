import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/formElements/input/input';
import Button from '../../shared/components/formElements/button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/form-hook'
import './placeForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
          title: 'Yaffa',
          description: 'The southern and oldest part of Tel Aviv-Yafo, is an ancient port city in Israel.',
          imageUrl: 'https://www.namalyafo.co.il/wp-content/uploads/2019/02/DJI_0836doronsaar-e1574798133810.jpg?x87381',
          address: 'nowadays has turned into one of the quarters of Tel Aviv',
          location: {
            lat: 32.109333,
            lng: 34.855499
          },
          creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Yaffa',
            description: 'The southern and oldest part of Tel Aviv-Yafo, is an ancient port city in Israel.',
            imageUrl: 'https://www.namalyafo.co.il/wp-content/uploads/2019/02/DJI_0836doronsaar-e1574798133810.jpg?x87381',
            address: 'nowadays has turned into one of the quarters of Tel Aviv',
            location: {
              lat: 32.109333,
              lng: 34.855499
            },
            creator: 'u2'
  }
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true
        },
        description: {
          value: identifiedPlace.description,
          isValid: true
        }
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
