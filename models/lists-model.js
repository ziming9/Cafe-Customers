const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Lists = new Schema({
    lists_name: {
        type: String
    },
    lists_phone: {
        type: String
    }
});

module.exports = mongoose.model('Person', Lists);