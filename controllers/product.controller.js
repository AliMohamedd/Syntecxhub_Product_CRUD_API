const Product = require('../models/product.model.js');

// Get all products by filter (category, minPrice, maxPrice) and pagination (page, limit)
const getAllProducts = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, page = 1, limit = 3 } = req.query;

        let filter = {};

        // Filter by category or categories (comma-separated)
        if (category) {
            const categories = category.split(',');
            filter.category = { $in: categories };
        }

        // Filter by price range
        if (minPrice || maxPrice) {
            filter.price = {};

            if (minPrice) {
                filter.price.$gte = Number(minPrice); // greater than or equal
            }

            if (maxPrice) {
                filter.price.$lte = Number(maxPrice); // less than or equal
            }
        }
        
        // Add pagination
        const skip = (page - 1) * limit;

        const total = await Product.countDocuments(filter);
        
        const products = await Product.find(filter)
            .skip(skip)
            .limit(Number(limit));
        
        if (!total) {
            return res.sendStatus(204);
        } 

        res.status(200).json({
            total,
            page: Number(page),
            pages: Math.ceil(total / limit),
            products
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Helper function to validate product data
function isValidProduct(data) {
    const product = new Product(data);
    return !product.validateSync();
}

// Create a new product
const createProduct = async (req, res) => {
    try {
        if (!isValidProduct(req.body)) {
            return res.status(400).json({ message: "Invalid product data" });
        }

        const product = await Product.create(req.body);

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Update a product by ID entirely (overwrite)
const updateEntireProduct = async (req, res) => {
    try {
        if (!isValidProduct(req.body)) {
            return res.status(400).json({ message: "Invalid product data" });
        }

        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Update a product by ID partially (only provided fields)
const updateProductPartially = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, {
                          new: true,
                          runValidators: true
                        });  
        res.sendStatus(204);               
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateEntireProduct,
    updateProductPartially,
    deleteProduct
};