import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteService, getService } from 'services/apiService'
import { ENDPOINT_USERS } from "services/settings"

const initialState = {
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
            state.users = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = action.payload
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.users = []
            })
            .addCase(deleteUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                console.log('id: ', action.payload);
                const filteredUsers = state.users.filter(e => e.id !== action.payload)
                state.isLoading = false
                state.isSuccess = true
                state.users = filteredUsers
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.users = []
            })
    },
})

export const { reset } = usersSlice.actions

export default usersSlice.reducer

export const fetchAllUsers = createAsyncThunk('users', async (thunkAPI) => {
    try {
        const data = await getService(ENDPOINT_USERS)
        return data.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteUser = createAsyncThunk('delete/user', async (id, thunkAPI) => {
    try {
        console.log('id', id);
        const response = await deleteService(ENDPOINT_USERS, id)
        console.log(response.data);
        return id
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}) 