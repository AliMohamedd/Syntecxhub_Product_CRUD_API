const { ServerDescription } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },

        price: {
            type: Number,
            required: [true, "Please enter product price"],
        },
        
        category: {
            type: String,
            required: [true, "Please enter product category"]
        },

        description: {
            type: String,
            required: [false, "Please enter product description"]
        },

        
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;