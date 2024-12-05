import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    image:{type: String},
    category:{type: String, required: true},
    price:{type: Number, required: true},
    salePrice:{type: Number},
    quantity:{type: Number, required: true},
    totalStock:{type: Number, required: true},
    brand:{type: String, required: true},
},{timestamps:true})
const Product = mongoose.model('product',productSchema);
export default Product;