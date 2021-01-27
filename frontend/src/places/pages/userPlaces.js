import React from 'react';
import PlaceList from '../../places/components/placeList/placeList';

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
        }
      ];
      
      const UserPlaces = () => {
      
        return <PlaceList items={DUMMY_PLACES} />;
      };
      
      export default UserPlaces;  