import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteService, getService, postService, updateService } from 'services/apiService'
import { ENDPOINT_USERS } from "services/settings"

const initialState = {
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// export const usersSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//         reset: (state) => {
//             state.isLoading = false
//             state.isSuccess = false
//             state.isError = false
//             state.message = ''
//             state.users = []
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchAllUsers.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(fetchAllUsers.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.isSuccess = true
//                 state.users = action.payload
//             })
//             .addCase(fetchAllUsers.rejected, (state, action) => {
//                 state.isLoading = false
//                 state.isError = true
//                 state.message = action.payload
//                 state.users = []
//             })
//             .addCase(deleteUsers.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(deleteUsers.fulfilled, (state, action) => {
//                 const filteredUsers = state.users.filter(e => e.id !== action.payload)
//                 state.isLoading = false
//                 state.isSuccess = true
//                 state.users = filteredUsers
//             })
//             .addCase(deleteUsers.rejected, (state, action) => {
//                 state.isLoading = false
//                 state.isError = true
//                 state.message = action.payload
//                 state.users = []
//             })
//     },
// })

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
            .addCase(createUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = [...state.users, action.payload]
            })
            .addCase(createUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteUsers.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(deleteUsers.fulfilled, (state, action) => {
                const filteredUsers = state.users.filter(e => e.id !== action.payload)
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.users = filteredUsers
            })
            .addCase(deleteUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateUsers.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(updateUsers.fulfilled, (state, action) => {
                const updatedUsers = state.users.map(e => e.id === action.payload.id ? action.payload : e)
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.users = updatedUsers
            })
            .addCase(updateUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = usersSlice.actions

export default usersSlice.reducer

export const createUsers = createAsyncThunk('create/users', async (data, thunkAPI) => {
    try {
        const response = await postService(ENDPOINT_USERS, data)
        return data
    } catch (error) {
        const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const fetchAllUsers = createAsyncThunk('users', async (thunkAPI) => {
    try {
        const data = await getService(ENDPOINT_USERS)
        return data.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteUsers = createAsyncThunk('delete/user', async (id, thunkAPI) => {
    try {
        const response = await deleteService(ENDPOINT_USERS, id)
        return id
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateUsers = createAsyncThunk('update/users', async (data, thunkAPI) => {
    try {
        const { id, ...user } = data
        const response = await updateService(ENDPOINT_USERS, id, user)
        return { data }
    } catch (error) {
        const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})