import { createReducer } from "@reduxjs/toolkit";

const intialState = {
    user : {},
    orders: [],
    posts: [],
    addresses: [],
    cart: {},
    message: "",
    errorMessage: "",
    loading: false,
    products: []
};

export const userReducer = createReducer(intialState, (builder) => {

    builder.addCase("REQ_API", (state, action) => {
        state.loading = true
    });


    builder.addCase("USER_API_SUCCESS", (state, action) => {
        state.loading = false
        state.user = action.payload
    });


     builder.addCase("PRODUCT_API_SUCCESS", (state, action) => {
        state.loading = false
        state.products = action.payload
    });


      builder.addCase("CART_API_SUCCESS", (state, action) => {
        state.loading = false
        state.cart= action.payload
        state.errorMessage = action.message
    });

    builder.addCase("CART_API_FAILURE", (state, action) => {
        state.loading = false
        state.errorMessage = action.message 
    });



   

    builder.addCase("REQ_API_FAILURE", (state, action) => {
        state.loading = false
        state.errorMessage = action.message 
    });


  
   


  

});


