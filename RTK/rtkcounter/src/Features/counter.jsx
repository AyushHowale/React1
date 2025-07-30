import React, { useState } from 'react'
import { createSlice } from '@reduxjs/toolkit'


const [value,setvalue] = useState(0)
export const counterslice = createSlice(
    {
        name:"Counter",
        initialState : value,


        reducers:{
            increment : state=> value =+ 1,
            decrement : state=> value =- 1,
        }

    }
)

export const {increment,decrement} = counterslice.actions
export default counterslice.reducer 

