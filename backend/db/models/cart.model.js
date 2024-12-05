import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, required:true, ref: 'user'},
    items:[
        {
            productId:{type:mongoose.Schema.Types.ObjectId, required:true, ref: 'product'},
            quantity:{type:Number, required:true,default:1}
        }
    ]
},{timestamps:true})
const Cart = mongoose.model('cart',cartSchema);
export default Cart;