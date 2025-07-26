import React from 'react'
import { useState,useContext } from 'react'
import Usercontext from '../Context/Usercontext'

function Login() {
    const [username,setusername] = useState("")
    const [password,setpassword] = useState("")

    const {setuser} = useContext(Usercontext)
   
    const handlesubmit = () => {

    }


  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Username' />
      <input type="text" value={password} onChange={(e)=>setusername(e.target.value)} placeholder='Password' />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
