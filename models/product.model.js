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
            required: true,
            default: 0
        },

        description: {
            type: String,
            required: [true, "Please enter product description"]
        },

        category: {
            type: String,
            required: [true, "Please enter product category"]
        },

    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;