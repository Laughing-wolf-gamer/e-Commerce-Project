import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState= {
	isAuthenticated: false,
	isLoading:true,
	user:null,
}
const authSlice = createSlice({
	name:'auth',
	initialState,
	reducers:{
		setUser:(state,action)=>{

		}
	},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading = true;
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        }).addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        }).addCase(loginUser.pending,(state)=>{
            state.isLoading = true;
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = !action?.payload?.Success ? false:true;
            state.user = !action?.payload?.Success ? null:action?.payload?.user;
        }).addCase(loginUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        }).addCase(checkAuth.pending,(state)=>{
            state.isLoading = true;
        }).addCase(checkAuth.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = action?.payload?.Success;
            state.user = !action?.payload?.Success ? null:action?.payload?.user;
        }).addCase(checkAuth.rejected,(state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
            
        }).addCase(logoutUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = false
            state.user =null
        })
    }
})
export const registerUser = createAsyncThunk('/auth/register',
    async(formData)=>{
        try {
            console.log(formData);
            const response = await axios.post('http://localhost:5000/api/auth/register',formData,{
                withCredentials:true,
            });
            console.log('response',response);
            return response.data;
        } catch (error) {
            console.error(error);
            return {Success:false,message:error.message};
        }
    }
)
export const loginUser = createAsyncThunk('/auth/login',
    async(formData)=>{
        try {
            console.log(formData);
            const response = await axios.post('http://localhost:5000/api/auth/login',formData,{
                withCredentials:true,
            });
            console.log('response',response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)
export const logoutUser = createAsyncThunk('/auth/logout',
    async()=>{
        try {
            const response = await axios.post('http://localhost:5000/api/auth/logout',{},{
                withCredentials:true,
            });
            console.log('response',response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)
export const checkAuth = createAsyncThunk('/auth/checkAuth',
    async()=>{
        try {
            const response = await axios.get('http://localhost:5000/api/auth/check-auth',{
                withCredentials:true,
                headers:{
                    'Cache-Control': 'no-store, no-cache, must-revalidate proxy-revalidate'
                }
            });
            console.log('response',response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)



export const { setUser } = authSlice.actions;
export default authSlice.reducer;