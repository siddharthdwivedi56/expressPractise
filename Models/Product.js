const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name : {
        type:String,
        unique:true,
        required:true
    }
});

let Product = mongoose.model('products',productSchema);
module.exports = Product;

