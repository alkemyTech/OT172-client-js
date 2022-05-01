import { createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const contactSlice= createSlice({
    name: 'contact',
    initialState : [
        {
        firstName:"",
        lastName: "",
        email: "",
        message:""
        }   
    ],
    reducers: {
        addMessage: (state,action)=>{
            state.push(action.payload)
        }
    }
})

export const { setContactList }= contactSlice.actions

export default contactSlice.reducer