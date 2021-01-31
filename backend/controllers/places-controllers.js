const { v4: uuidv4 } = require('uuid');
const HttpError = require('../models/http.error');


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

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }

  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError('Could not find a place for the provided id.', 404);
  }

  res.json({ place }); // => { place } => { place: place }
};

// function getPlaceById() { ... }
// const getPlaceById = function() { ... }

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError('Could not find a place for the provided user id.', 404)
    );
  }

  res.json({ place });
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
  // const title = req.body.title;
  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator
  };

  DUMMY_PLACES.push(createdPlace); //unshift(createdPlace)

  res.status(201).json({place: createdPlace});
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
