import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    userId:{type:String, required:true, ref: 'user'},
    items:[
        {
            productId:{type:String, required:true, ref: 'product'},
            quantity:{type:Number, required:true,default:1}
        }
    ]
},{timestamps:true})
const Cart = mongoose.model('cart',cartSchema);
export default Cart;