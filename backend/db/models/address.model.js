import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    userId:String,
	address:String,
	city:String,
    state:String,
    country:String,
	phoneNumber:String,
    postalCode:String,
},{timestamps:true})
const Address = mongoose.model('address',addressSchema);
export default Address;