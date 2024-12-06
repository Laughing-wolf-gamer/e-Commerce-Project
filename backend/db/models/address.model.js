import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    userId:String,
	address:String,
	city:String,
    state:String,
    country:{type:String,default:'india'},
	phoneNumber:String,
    pinCode:String,
    notes:String,
},{timestamps:true})
const Address = mongoose.model('address',addressSchema);
export default Address;