import React from "react";
import { handleLogin, handleRegister } from "../redux/userActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  const formData = {
    username: "tehleem",
    email: "tehleem@gmail.com",
    password: "2678909",
  };

  return (
    <div>
      Register
      <button onClick={() => { dispatch(handleRegister(formData)) }} >

        Register
      </button>


        <button onClick={() => { dispatch(handleLogin(formData)) }} >

          login
      </button>


      <Link  to ="/shop"> shop </Link>
    </div>
  );
};

export default Register;
