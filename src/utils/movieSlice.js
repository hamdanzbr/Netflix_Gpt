import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerPlaying:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },

        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies=action.payload
        },

        addTrailerVideo:(state,action)=>{
            state.trailerPlaying=action.payload
        }
    }
})
export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTrailerVideo}=movieSlice.actions;

export default movieSlice.reducer;