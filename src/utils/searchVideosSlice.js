import { createSlice } from "@reduxjs/toolkit";

const searchVideosSlice = createSlice({
    name:"searchVideos",
    initialState:{
        value:""
    },
    reducers:{
       setSearchVideos:(state,action)=>{
           state.value=action.payload;
       } 
    }
});

export const {setSearchVideos} = searchVideosSlice.actions;
export default searchVideosSlice.reducer;