const express = require('express');

const router = express.Router();

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
  }
];

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid //{pid: 'p1' }
  const place = DUMMY_PLACES.find( p => {
    return p.id === placeId;
  });
  res.json({place}); // {place}=>{place: place}
});

module.exports = router;