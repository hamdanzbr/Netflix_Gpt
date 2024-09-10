import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js'
import movieReducer from './movieSlice.js'
import gptReducer from './gptSlice.js'
import languageReducer from './languageSlice.js'
const appStore=configureStore({
    reducer:{
     user:userReducer,
     movies:movieReducer,
     gpt:gptReducer,
     language:languageReducer
    }
})
export default appStore