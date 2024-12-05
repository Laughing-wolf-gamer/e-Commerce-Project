import express from 'express';
import { addToCart, fetchCart, removeFromCart, updateCartQuantity } from '../../controllers/cart/cart.controller.js';

const router = express.Router();
router.post('/add',addToCart);
router.get('/get/:userId',fetchCart);
router.put('/update-cart',updateCartQuantity);
router.delete('/:userId/:productId',removeFromCart);

export default router;