import express from 'express';
import { getFilteredProducts, getProductDetailsById } from '../../controllers/shop/product.controller.js';

const router = express.Router();
router.get('/get',getFilteredProducts)
router.get('/get/:id',getProductDetailsById)

export default router;