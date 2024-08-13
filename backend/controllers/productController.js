import Product from '../models/productModels.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
});

const createProduct = asyncHandler(async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false,
            message: 'Please include all fields',
        });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error('Error creating Product', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true }
        );
        await product.save();
        res.json({ success: true, data: product });
    } catch (error) {
        console.error('Error updating Product', error);
        res.status(500).json({
            success: false,
            message: 'Product not found',
        });
    }
});

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(
            req.params.id
        );
        res.json({ success: true, data: product });
    } catch (error) {
        console.error('Error deleting Product', error);
        res.status(500).json({
            success: false,
            message: 'Product not found',
        });
    }
});

export {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};
