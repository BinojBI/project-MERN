const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Phone = new Schema({
    phone_name: {
        type: String
    },
    model: {
        type: String
    },
    ram: {
        type: Number
    },
    rom: {
        type: Number
    },
    selfie_camera: {
        type: Number
    },
    rear_camera: {
        type: Number
    },
    year: {
        type: Number
    },
    is_Available: {
        type: Boolean
    },
    shops:[{ 
        shop_name: String, 
        address: String,
        price: Number
    }]
        
    
});

module.exports = mongoose.model('Phone', Phone);