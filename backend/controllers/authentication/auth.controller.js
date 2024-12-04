import bcrypt from 'bcryptjs';
import User from "../../db/models/user.model.js";
import { GenerateJWTAndCookies, VerifyJWTAndCookies } from '../../utility/generateJwtAndCookies.js';

export const registerUser = async (req,res) =>{
    try {
        const {userName,email,password} = req.body;
        let user = await User.findOne({email: email});
        if(user){
            return res.status(401).json({Success:false,message: 'User already exists'});
        }
        /* const salt = await bcrypt.getSalt(10);
        console.log(salt); */
        const hashedPassword = await bcrypt.hash(password,12);
        user = new User({userName,email,password:hashedPassword});
        await user.save();
        res.status(200).json({Success:true,message: 'User registered successfully'});
    } catch (error) {
        console.error(`Error registering user `,error);
        res.status(500).json({Success:false,message: 'Internal Server Error'});
    }
}
export const logInUser = async (req,res) =>{
    try {
        const {email,password} = req.body;
        if(!email) return res.status(540100).json({Success:false,message: 'Please enter a valid email'});
        if(!password) return res.status(401).json({Success:false,message: 'Please enter a valid password'});
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json({Success:false,message: 'User not found'});
        }
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || '');
        if(!isPasswordCorrect){
            return res.status(401).json({Success:false,message: 'Incorrect Password'});
        }
        GenerateJWTAndCookies(user,res);
        res.status(200).json({Success:true,message: 'User logged in successfully',user:{
            email:user.email,
            role: user.role,
            id: user._id
        }})
    } catch (error) {
        console.error(`Error Logging in user ${error.message}`);
        res.status(500).json({Success:false,message: 'Internal Server Error'});
    }
}
export const logoutUser = (req, res) => {
    try {
        res.clearCookie('token').json({
            Success: true,
            message: 'User logged out successfully'
        })
    } catch (error) {
        console.error(`Error Logging out user ${error.message}`);
        res.status(500).json({Success:false,message: 'Internal Server Error'});
    }
}
export const getUser = (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({Success:true,message: 'User is Authenticated',user});
    } catch (error) {
        console.error(`Error checking Auth user ${error.message}`);
        res.status(500).json({Success:false,message: 'Internal Server Error'});
    }
}