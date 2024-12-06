import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import adminProductsSlice from './admin/product-slice';
import addressSlice from './shop/address-slice';
import shopProductSlice from './shop/product-slice';
import shoppingCartSlice from './shop/car-slice';


const store = configureStore({
	reducer:{
		auth:authReducer,
        adminProducts:adminProductsSlice,
        shopProductSlice:shopProductSlice,
        shopCardSlice:shoppingCartSlice,
        shopAddress:addressSlice
	}
})


export default store;