import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        gptMode:false
    },
    reducers:{
        showGptSearch:(state,action)=>{
            state.gptMode=!state.gptMode
        },
    }
})

export const {showGptSearch}=gptSlice.actions

export default gptSlice.reducer;