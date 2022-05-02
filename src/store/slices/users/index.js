import { createSlice } from '@reduxjs/toolkit'
import { getService } from 'services/apiService'
import { ENDPOINT_USERS } from "services/settings"


export const userSlice = createSlice({
    name: 'users',
    initialState: {list: [
        {
          id: 0, 
          firstName: "",
          lastName: "",
          email : "",
          password: "",
          roleId: null,
          image: ""
        }
    ]},
    reducers: {
    addUser: (state,action) => {
       state.push(action.payload)
       return state
    },
    getUsers: (state,action) => {
        return state
    },
    setUsers: (state,action) => {
        state.list = action.payload
    }
    }
})

export const { addUser, getUsers, setUsers } = userSlice.actions

export default userSlice.reducer

export const fetchAllUsers = () => async (dispatch) => {
    try {
        const response = await getService(ENDPOINT_USERS)
        dispatch(setUsers(response.data))
    } catch (error) {
        console.log(error.message)
    }
}