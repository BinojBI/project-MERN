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
    availableShops:[{ 
        shop_name: String, 
        phone_price: Number,
        phone_color: String
    }]
        
    
});

module.exports = mongoose.model('Phone', Phone);