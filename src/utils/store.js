import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchVideosSlice from "./searchVideosSlice";
const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        searchVideos:searchVideosSlice
    }
})

export default store;  