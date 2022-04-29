import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSlice = createSlice({
    name: 'users',
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
    addUser: (state,action) => {
       state.push(action.payload)
       return state
    },
    getUsers: (state,action) => {
        return state
    }
    }
})

export const { addUser, getUsers } = userSlice.actions

export default userSlice.reducer
