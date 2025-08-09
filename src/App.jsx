import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Shop from './components/Shop'

const App = () => {


  const username = useSelector((user) =>user.username)

  
  return (


      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<div> <h1> Hello from react vite bundler    {username} </h1>    </div>}/>



          <Route path='/user/register' element = { <Register/>} />
           <Route path='/shop' element = { <Shop/>} />


        </Routes>
        
      
      
      </BrowserRouter>



  
  )
}

export default App