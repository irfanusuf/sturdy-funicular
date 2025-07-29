import axios from "axios";


export const axiosInstance = axios.create({
    // baseURL: "http://localhost:4000",
    baseURL: "https://ok-6ys8.onrender.com",
    withCredentials: true
});
