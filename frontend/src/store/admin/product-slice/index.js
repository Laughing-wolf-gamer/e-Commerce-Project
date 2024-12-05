import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const adminProductSlice = createSlice({
    name:"adminProducts",
    initialState:{
        isLoading:false,
        products:[],
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending,(state)=>{
            state.isLoading = true;
        }).addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.products = action?.payload.result;
            console.log(action?.payload?.data);
        }).addCase(fetchAllProducts.rejected,(state,action)=>{
            state.isLoading = false;
            state.products = [];

        })
    }
})
export const addNewProduct = createAsyncThunk('/products/addNewProduct',async (formData)=>{
    try {
        const response = await axios.post('http://localhost:5000/api/admin/product/add',formData,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
})
export const fetchAllProducts = createAsyncThunk('/products/fetchAllProducts',async ()=>{
    try {
        const response = await axios.get('http://localhost:5000/api/admin/product/all',{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
})
export const editProducts = createAsyncThunk('/products/edit',async ({id,formData})=>{
    try {
        const response = await axios.put(`http://localhost:5000/api/admin/product/edit/${id}`,formData,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response?.data;
    } catch (error) {
        console.error(error);
    }
})
export const delProducts = createAsyncThunk('/products/del',async (id)=>{
    try {
        const response = await axios.delete(`http://localhost:5000/api/admin/product/del/${id}`,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response?.data;
    } catch (error) {
        console.error(error);
    }
})


export default adminProductSlice.reducer;