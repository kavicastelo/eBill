const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    unitPrice:{
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Product',productSchema);