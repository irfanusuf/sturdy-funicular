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
    loading: false
};

export const userReducer = createReducer(intialState, (builder) => {
    builder.addCase("GET_USER", (state, action) => {
        state.loading = true
        state.username = "tehleem khan"
        state.email = "email@example.com"

    });


    builder.addCase("SOME_ERROR", (state, action) => {
        state.loading = false
        state.errorMessage = "network Error!"
    })


});
