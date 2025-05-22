import React, { useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"
import {Link, useNavigate} from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()


   const formBody = {

     email , password
   }


  const handleLogin = async (event) => {
    try {
      event.preventDefault()

      const res = await axios.post("http://localhost:4000/login" , formBody)     // network api call 

      if(res.status === 200){

          toast.success(res.data.message)
          localStorage.setItem("Authorization Token" , res.data.authorization_token)

          setTimeout(() => {
            navigate("/user/dashboard")
          }, 2000);
      }
    

    } catch (error) {

      if(error.response){
        if(error.response.status === 400){
          toast.error(error.response.data.message)
        }
      }else{
        toast.error("Network Error!")
      }

     
  
      console.error(error);
    }
  };

  return (
    <div className="register_container container mt-5 p-4 w-100">
      <form>
        <p className="text-success h4 mb-3"> Login With Us </p>


        <div className="mb-3">
          <label className="mb-2"> Email <span className="text-danger">*</span> </label>
          <input
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            className="form-control"
            placeholder="your Email goes here"
            type="email"
            value={email}
          />
        </div>

        <div className="mb-3">
          <label className="mb-2"> password <span className="text-danger">*</span></label>
          <input
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            className="form-control"
            placeholder="your password goes here"
            type="password"
            value={password}
          />
        </div>

            <p> If u are not registered  Go to the <Link to={"/register"} > Register </Link>  </p>
        <button  type="submit" className="btn btn-outline-success" onClick={(event)=>{handleLogin(event)} }>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
