import Address from "../../db/models/address.model.js";

export const addAddress = async (req,res)=>{
	try {
		const {
			userId,
			address,
			city,
			state,
			country,
			phoneNumber,
			postalCode,
		} = req.body;
		const newAddress = new Address({userId, address, city, state, country, phoneNumber, postalCode});
		await newAddress.save();
		res.status(201).json({Success: true, message: 'Address added successfully!', result: newAddress});
	} catch (error) {
		console.error(`Error adding Address: ${error.message}`);
		res.status(500).json({Success: false, message: 'Internal Server Error'});
	}
}
export const fetchAllAddress = async(req,res)=>{
	try {
		const {userId} = req.params;
		if(!userId) return res.status(404).json({Success: false, message: 'User Id is required'});
		const addresses = await Address.find({userId});
		if(!addresses) return res.status(404).json({Success: false, message: 'No address found'});
		res.status(200).json({Success: true, message: 'All addresses fetched successfully!', result: addresses});

	} catch (error) {
		console.error(`Error fetch All Address: ${error.message}`);
		res.status(500).json({Success: false, message: 'Internal Server Error'});
	}
}
export const editAddress = async (req,res)=>{
	try {
		const {userId,addressId} = req.params;
		const formData = req.body;
		if(!userId || !addressId) return res.status(404).json({Success: false, message: 'User Id is required'});
		const addresses = await Address.findOneAndUpdate({_id:addressId,userId},formData,{new:true});
		if(!addresses) return res.status(404).json({Success: false, message: 'No address found'});
		res.status(200).json({Success: true, message: 'Address updated successfully!', result: addresses});
	} catch (error) {
		console.error(`Error Edit Address: ${error.message}`);
		res.status(500).json({Success: false, message: 'Internal Server Error'});
	}
}
export const deleteAddress = async (req,res)=>{
	try {
		const {userId,addressId} = req.params;
		if(!userId || !addressId) return res.status(404).json({Success: false, message: 'User Id is required'});
		const addresses = await Address.findOneAndDelete({_id:addressId,userId});
		if(!addresses) return res.status(404).json({Success: false, message: 'No address found'});
		res.status(200).json({Success: true, message: 'Address deleted successfully!', result: addresses});
	} catch (error) {
		console.error(`Error Deleting Address: ${error.message}`);
		res.status(500).json({Success: false, message: 'Internal Server Error'});
	}
}