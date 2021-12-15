const mongoose = require('mongoose');
const productsSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    type:{
        type: String
    }
});

module.exports = mongoose.model('products',productsSchema);