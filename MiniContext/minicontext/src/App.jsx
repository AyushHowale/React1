import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontext from './Context/Usercontext'
import usercontextprovider from './Context/Usercontextprovider'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Usercontextprovider>
  <h1>React with State management</h1>
  </Usercontextprovider>
  )
}

export default App
