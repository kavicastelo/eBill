const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    customer:{
        type: Object,
        required: true
    },
    items:{
        type: Array,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});
module.exports = mongoose.model('Order',orderSchema);