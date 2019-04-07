const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let locationSchema = new Schema({
    lotID: {
        type: String
    },
    parkingLotName: {
        type: String
    },
    address: {
        type: String
    },
    coordinates: [],
    fineAmount: {
        type: String
    },
    noOfLots: {
        type: String
    },
    occupied: {
        type: Number
    },
    available: {
        type: Number
    }
},{
    collection: 'Location'
});

const Location = mongoose.model('location', locationSchema );

module.exports = Location;
