const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

// Get all products By Filter (category, minPrice, maxPrice)
router.get('/', getAllProducts);

// Get a product by ID
router.get('/:id', getProductById);

// Create a new product
router.post('/', createProduct);

// Update a product by ID
router.put('/:id', updateProduct);

// Delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;