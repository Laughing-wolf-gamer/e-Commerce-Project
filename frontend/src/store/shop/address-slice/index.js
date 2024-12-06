import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const addressSlice = createSlice({
    name: 'addresses',
    initialState: {
        isLoading: true,
        addresses: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addAddresses.pending, (state) => {
            state.isLoading = true;
        }).addCase(addAddresses.rejected, (state) => {
            state.isLoading = false;
        }).addCase(addAddresses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.addresses = action?.payload?.result || [];
        }).addCase(fetchAddresses.pending, (state) => {
            state.isLoading = true;
        }).addCase(fetchAddresses.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.addresses = action?.payload?.result || [];
        }).addCase(fetchAddresses.rejected,(state,action)=>{
            state.isLoading = false;
            state.addresses = [];
            console.error(action.error);
        })/* .addCase(editAddress.pending, (state) => {
            state.isLoading = true;
        }).addCase(editAddress.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.addresses = action?.payload?.result || [];
        }).addCase(editAddress.rejected,(state,action)=>{
            state.isLoading = false;
            state.addresses = [];
            console.error(action.error);
        }).addCase(deleteAddress.pending, (state) => {
            state.isLoading = true;
        }).addCase(deleteAddress.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.addresses = action?.payload?.result || [];
        }).addCase(deleteAddress.rejected,(state,action)=>{
            state.isLoading = false;
            state.addresses = [];
            console.error(action.error);
        }); */
    }
})

export const addAddresses = createAsyncThunk('/addresses/addNewAddress',async (formData) =>{
    const result = await axios.get('http://localhost:5000/api/shop/address/add',formData,{
        withCredentials: true,
    });
    return result.data;
})
export const fetchAddresses = createAsyncThunk('/addresses/fetchAddress',async ({userId}) =>{
    const result = await axios.get(`http://localhost:5000/api/shop/address/get/${userId}`);
    return result.data;
})
export const editAddress = createAsyncThunk('/addresses/editAddress',async ({userId,addressId,formData}) =>{
    const result = await axios.put(`http://localhost:5000/api/shop/address/edit/${userId}/${addressId}`,formData,{
        withCredentials: true,
    });
    return result.data;
})
export const deleteAddress = createAsyncThunk('/addresses/editAddress',async ({userId,addressId}) =>{
    const result = await axios.put(`http://localhost:5000/api/shop/address/delete/${userId}/${addressId}`);
    return result.data;
})



export default addressSlice.reducer;