import { createSlice } from '@reduxjs/toolkit'



import axios from 'axios'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: []
    },
    reducers: {
    addUser: (state,action) => {
       state.list.push(action.payload)
    }
    }
})

export const { addUser } = userSlice.actions

export default userSlice.reducer
