import { toast } from "react-toastify"
import { axiosInstance } from "../../utils/axiosInstance"




// redux thunk
export const handleRegister = (formData) => async (action) => {

    try {
        action({ type  : "" })

         const res = await axiosInstance("/user/register", formData)

        if (res.status === 200) {
            toast.success(res.data.message)
            action({ type: "REQ_API_SUCCESS", payload: res.data.payload })
        }

    } catch (error) {
        console.error(error)

        action({ type: "REQ_API_FAILURE", message: "Network Error" })
    }




}


export const handleLogin = async (formData) => (action) => {





}
