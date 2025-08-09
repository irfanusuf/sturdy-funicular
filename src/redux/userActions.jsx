import { toast } from "react-toastify"
import { axiosInstance } from "../utils/axiosInstance"




// redux thunk
export const handleRegister = (formData) => async (action) => {

    try {
        action({ type: "REQ_API" })     // state.loading : true 

        const res = await axiosInstance.post("/user/register", formData)

        if (res.status === 201) {
            toast.success(res.data.message)
            action({ type: "REQ_API_SUCCESS", payload: res.data.payload })  //  state.lodaing  : false 
        }

    } catch (error) {
        console.error(error)
        action({ type: "REQ_API_FAILURE", message: "Network Error" })
    }
}


export const handleLogin =  (formData) => async (action) => {


   try {
        action({ type: "REQ_API" })     // state.loading : true 

        const res = await axiosInstance.post("/user/login", formData)

        if (res.status === 200) {
            toast.success(res.data.message)
            action({ type: "USER_API_SUCCESS", payload: res.data.payload })  //  state.lodaing  : false 
        }

    } catch (error) {
        console.error(error)
        action({ type: "REQ_API_FAILURE", message: "Network Error" })
    }


}



export const fetchProducts = () => async (action) => {


    try {
        action({ type: "REQ_API" })     // state.loading : true 

        const res = await axiosInstance.get("/product/getAll")

        if(res.status === 200){
          action({ type: "PRODUCT_API_SUCCESS", payload: res.data.payload })
        }



    } catch (error) {
        console.error(error)
        action({ type: "REQ_API_FAILURE", message: "Network Error" })
    }



}


export const fetchCart = () => async (action) => {


    try {
        action({ type: "REQ_API" })     // state.loading : true 

        const res = await axiosInstance.get("/cart/getCart")

        if(res.status === 200){
          action({ type: "CART_API_SUCCESS", payload: res.data.payload })
        }



    } catch (error) {
        console.error(error)
        action({ type: "CART_API_FAILURE", message: "Network Error" })
    }



}