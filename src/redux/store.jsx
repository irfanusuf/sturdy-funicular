import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers";




const store = configureStore({

    reducer: {
        user :  userReducer,    // user reducer 
        // product : ""

    }



})


export default store