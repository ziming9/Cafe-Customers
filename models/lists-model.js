const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Lists = new Schema({
    lists_phone: {
        type: String
    },
    lists_name: {
        type: String
    },
    lists_address: {
        type: String
    } 
});

module.exports = mongoose.model('Person', Lists);