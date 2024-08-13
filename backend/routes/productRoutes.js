import express from 'express';
const router = express.Router();

import {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/productController.js';

router.route('/products').get(getAllProducts).post(createProduct);
router
    .route('/products/:id')
    .put(updateProduct)
    .delete(deleteProduct);

export default router;
