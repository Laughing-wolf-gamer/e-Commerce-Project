import express from 'express';
import { addNewProduct, deleteProduct, editProduct, fetchAllProducts, uploadImage } from '../../controllers/admin/admin.controller.js';
import { upload } from '../../utility/cloudinaryUtils.js';

const router = express.Router();
router.post('/upload-image',upload.single('my_file'),uploadImage);
router.post('/product/add',addNewProduct);
router.get('/product/all',fetchAllProducts);
router.put('/product/edit/:id',editProduct);
router.delete('/product/del/:id',deleteProduct);
export default router;