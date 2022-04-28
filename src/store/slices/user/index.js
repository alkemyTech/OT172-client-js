import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const setUserSlice = createSlice({
    name: 'user',
    initialState: [
        {
          id: 0, 
          firstName: "",
          lastName: "",
          email : "",
          password: "",
          roleId: null,
          image: ""
        }
    ],
    reducers: {
    getUser: (state,action) => {
       state = action.payload
       return state
    }
    }
})

export const { getUser } = setUserSlice.actions

export default setUserSlice.reducer
