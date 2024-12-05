import Product from "../../db/models/product.model.js";
import { handleImageUpload } from "../../utility/cloudinaryUtils.js";

export const uploadImage = async (req, res) =>{
    try {
        // Convert the buffer into a base64 string
        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const fileData = `data:${req.file.mimetype};base64,${b64}`;

        // Upload image to Cloudinary
        const result = await handleImageUpload(fileData);
        console.log("Uploaded Image URL:", result.secure_url);

        // Return the uploaded image URL
        res.status(200).json({
            Success: true,
            message: 'Image uploaded successfully!',
            result: result.secure_url
        });
    } catch (error) {
        console.error('Error while uploading image:', error);
        res.status(500).json({
            Success: false,
            message: 'Internal Server Error'
        });
    }
}
export const addNewProduct = async (req, res) => {
    try {
        const {
            title,
            description,
            image,
            category,
            price,
            salePrice,
            quantity,
            totalStock,
            brand,
        } = req.body;
        const newProduct = new Product({
            title,
            description,
            image,
            category,
            price,
            salePrice,
            quantity,
            totalStock,
            brand,
        });
        await newProduct.save();
        res.status(201).json({Success: true, message: 'Product added successfully!', result: newProduct});
    } catch (error) {
        console.error('Error while adding new product:', error);
        res.status(500).json({Success: false, message: 'Internal Server Error'});
    }
}
export const fetchAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({});
        console.log(allProducts);
        if(!allProducts) res.status(404).json({Success:false,message:"No products found"});
        res.status(200).json({Success: true, message: 'All products fetched successfully!', result: allProducts});
    } catch (error) {
        console.error('Error while Fetching all product:', error);
        res.status(500).json({Success: false, message: 'Internal Server Error'});
    }
}
export const editProduct = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) return res.status(400).json({Success:false,message:"Product ID is required"});
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedProduct) res.status(404).json({Success:false,message:"Product Update Failed"});
        res.status(200).json({Success: true, message: 'Product updated successfully!', result: updatedProduct});
    } catch (error) {
        console.error('Error while Editing a product:', error);
        res.status(500).json({Success: false, message: 'Internal Server Error'});
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const{id} = req.params;
        if(!id) return res.status(400).json({Success:false,message:"Product ID is required"});
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct) res.status(404).json({Success:false,message:"Product not found"});
        res.status(200).json({Success: true, message: 'Product deleted successfully!', result: deletedProduct});
    } catch (error) {
        console.error('Error deleting the Product', error);
        res.status(500).json({Success: false, message: 'Internal Server Error'});
    }
}