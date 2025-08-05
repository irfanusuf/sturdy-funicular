import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {




  const username = useSelector((user) =>user.username)


  
  return (
    <div> <h1> Hello from react vite bundler    {username} </h1>    </div>
  )
}

export default App