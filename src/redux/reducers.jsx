import { createReducer } from "@reduxjs/toolkit";

const intialState = {
    username: "",
    email: "",
    orders: [],
    posts: [],
    addresses: [],
    cart: {},
    message: "",
    errorMessage: "",
    loading: false,
    payload: {} || []
};

export const userReducer = createReducer(intialState, (builder) => {

    builder.addCase("REQ_API", (state, action) => {
        state.loading = true
    });


    builder.addCase("REQ_API_SUCCESS", (state, action) => {
        state.loading = false
        state.payload = action.payload
    });


    builder.addCase("REQ_API_FAILURE", (state, action) => {
        state.loading = false
        state.errorMessage = action.message 
    });



    builder.addCase("GET_USER", (state, action) => {
        state.loading = true
        state.username = action.payload.username
        state.email = action.payload.email

    });


  

});


