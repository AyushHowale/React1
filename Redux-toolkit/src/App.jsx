import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './Components/Todos'
import Addtodo from './Components/Addtodo'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
    <h1 className='text-3xl text-center p-4 text-red-600 bg-green-700'>
    Use redux tool kit
    </h1>
    
    <Addtodo />
    <Todos />
    
    
   </>
  )
}

export default App
