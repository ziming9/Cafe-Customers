const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PersonSchema = new Schema({
    lists_phone: {
        type: String,
        required: true
    },
    lists_name: {
        type: String
    },
    lists_address: {
        type: String
    },
    lists_blacklist: {
        type: Boolean
    },
    lists_email: {
        type: String
    }
});

module.exports = mongoose.model('Person', PersonSchema);