const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema ({
    title: {title: String, required: true},
    desscription: {title: String, required: true},
    image: {title: String, required: true},
    address: {title: String, required: true},
    location: {
        lat: {title: Number, required: true},
        lng: {title: Number, required: true}
    },
    creator: {title: String, required: true}
});

module.exports = mongoose.model('Place', placeSchema);