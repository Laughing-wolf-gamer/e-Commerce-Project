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
        }).addCase(fetchAddresses.fulfilled)
    }
})

export const addAddresses = createAsyncThunk('/addresses/addNewAddress',async (formData) =>{
    const result = await axios.get('http://localhost:5000/api/shop/address/add',formData,{
        withCredentials: true,
    });
    return result.data;
})
export const fetchAddresses = createAsyncThunk('/addresses/addNewAddress',async ({userId}) =>{
    const result = await axios.get(`http://localhost:5000/api/shop/address/get/${userId}`);
    return result.data;
})


export default addressSlice.reducer;