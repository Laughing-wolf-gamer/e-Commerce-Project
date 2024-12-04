import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName:{type: String, required: true},
    email:{type: String, required: true,unique:true},
    password:{type: String, required: true},
    role:{type: String, required: true,default:"user"},
},{timeseries:true})
const User = mongoose.model('user',userSchema);
export default User;