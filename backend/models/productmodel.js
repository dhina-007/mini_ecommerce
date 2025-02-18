const mongoose = require('mongoose');



const productschema = new mongoose.Schema({
    name :String,
    price: String,
    description: String,
    rating: String,
    image:[
        {
            image: String
        }
    ],
    category: String,
    seller :String,
    stock: String,
    numofreviews : String,
    createdAT:Date
});

const productmodel = mongoose.model('product',productschema);

module.exports = productmodel;