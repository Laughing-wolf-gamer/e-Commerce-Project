import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId:String,
	cartItems:[
		{
			productId:String,
            title:String,
            image:String,
            price:Number,
            salePrice:Number,
			quantity:Number,
		}
	],
	address:{
		address:String,
        city:String,
        state:String,
        country:{type:String,default:'india'},
        phoneNumber:String,
        pinCode:String,
        notes:String,
	},
	orderStatus:String,
	paymentMethods:String,
	totalAmount:Number,
	orderDate:Date,
	orderUpdateDate:Date,
	paymentId:String,
	payerId:String,
},{timestamps:true})
const Order = mongoose.model('order',orderSchema);
export default Order;