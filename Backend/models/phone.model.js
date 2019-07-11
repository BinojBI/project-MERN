const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Phone = new Schema({
    phone_name: {
        type: String
    },
    description: {
        model: String,
        ram: Number,
        rom: Number,
        selfie_camera:Number,
        rear_camera:Number

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