import React from 'react'
import { handleRegister } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'

const Register = () => {

const dispatch = useDispatch()


const formData = {
    username  : "tehleem",
    email : "tehleem@gmail.com",
    password : "2678909"
}

  return (
    <div>
        
        
        Register
        <button onClick={ dispatch(handleRegister(formData))   }> Register </button>
    </div>
  )
}

export default Register