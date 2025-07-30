import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './Features/counter'


function App() {

  
  const dispatch = useDispatch()

  function increment (){
    dispatch(increment())
   
  }
  function decrement (){
    dispatch(decrement())
    

  }

  return (
   <>
   <button onClick={increment}>+</button>
   <h1>Counter: {timer}</h1>
   <button onClick={decrement}>-</button>
   </>
  )
}

export default App
