import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLogedIn: false,
    token: null,
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logIn:(state)=>{
            state.isLogedIn = true,
            state.token = action.payload
        },
        logOut:(state)=>{
            state.isLogedIn = false,
            state.token = null
        }
    }
})

export const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;