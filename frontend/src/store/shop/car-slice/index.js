import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const shoppingCartSlice = createSlice({
    name: 'shoppingCartSlice',
    initialState: {
        isLoading:true,
        cartItems: [],
        totalPrice: 0
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addToCart.pending,(state)=>{
            state.isLoading = true;
        }).addCase(addToCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.cartItems = action.payload.cart;
        }).addCase(addToCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.cartItems = [];
        }).addCase(fetchCartItems.pending,(state)=>{
            state.isLoading = true;
        }).addCase(fetchCartItems.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.cartItems = action.payload.data;
        }).addCase(fetchCartItems.rejected,(state,action)=>{
            state.isLoading = false;
            state.cartItems = [];
        }).addCase(updateToCart.pending,(state)=>{
            state.isLoading = true;
        }).addCase(updateToCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.cartItems = action.payload.data;
        }).addCase(updateToCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.cartItems = [];
        }).addCase(deleteCartItems.pending,(state)=>{
            state.isLoading = true;
        }).addCase(deleteCartItems.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.cartItems = action.payload.data;
        }).addCase(deleteCartItems.rejected,(state,action)=>{
            state.isLoading = false;
            state.cartItems = [];
        })

    }
})

export const addToCart = createAsyncThunk('shoppingCart/addToCart', async ({userId,productId,quantity}) => {
    const result = await axios.post(`http://localhost:5000/api/cart/add`,{
        userId,
        productId,
        quantity
    });
    return result.data;
});
export const updateToCart = createAsyncThunk('shoppingCart/updateToCart', async ({userId,productId,quantity}) => {
    // Simulate adding product to the cart
    const result = await axios.put(`http://localhost:5000/api/cart/update-cart`,{
        userId,
        productId,
        quantity
    },{
        withCredentials:true,
    });
    return result.data;
});
export const fetchCartItems = createAsyncThunk('shoppingCart/fetchCarItems', async ({userId}) => {
    console.log(userId);
    const result = await axios.get(`http://localhost:5000/api/cart/get/${userId}`);
    return result.data;
});
export const deleteCartItems = createAsyncThunk('shoppingCart/deleteCartItems', async ({userId,productId}) => {
    const result = await axios.delete(`http://localhost:5000/api/cart/${userId}/${productId}`);
    return result.data;
});
export default shoppingCartSlice.reducer;