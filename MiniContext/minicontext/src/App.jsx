import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontext from './Context/Usercontext'
import Usercontextprovider from './Context/Usercontextprovider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Usercontextprovider>
  <h1>React with State management</h1>
  <Login />
  
  <Profile />
  </Usercontextprovider>
  )
}

export default App
