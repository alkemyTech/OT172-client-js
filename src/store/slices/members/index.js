import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteService, getService, postService, updateService, updateServiceImg } from 'services/apiService'
import { ENDPOINT_MEMBERS } from "services/settings"

const initialState = {
    members: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const memberSlice = createSlice({
    name: 'members',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
            state.members = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllMembers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllMembers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.members = action.payload
            })
            .addCase(fetchAllMembers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.members = []
            })
            .addCase(createMembers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createMembers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.members = [...state.members, action.payload] 
            })
            .addCase(createMembers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteMembers.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(deleteMembers.fulfilled, (state, action) => {
                const filteredMembers = state.members.filter(e => e.id !== action.payload)
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.members = filteredMembers
            })
            .addCase(deleteMembers.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateMembers.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(updateMembers.fulfilled, (state, action) => {
                const updatedMembers = state.members.map(e => e.id === action.payload.id ? action.payload : e )
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.members = updatedMembers
            })
            .addCase(updateMembers.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = memberSlice.actions

export default memberSlice.reducer

export const createMembers = createAsyncThunk('create/members', async (data, thunkAPI) => {
    try {
         const response = await postService(ENDPOINT_MEMBERS, data, data.image !== null)
        return data
    } catch (error) {
        const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchAllMembers = createAsyncThunk('members', async (thunkAPI) => {
    try {
        const data = await getService(ENDPOINT_MEMBERS)
        return data.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteMembers = createAsyncThunk('delete/members', async (id, thunkAPI) => {
    try {
         const response = await deleteService(ENDPOINT_MEMBERS, id)
        return id
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateMembers = createAsyncThunk('update/members', async (data, thunkAPI) => {
    try {
        const {id, ...member} = data
         const response = await updateService(ENDPOINT_MEMBERS, id, member, member.image !== null)
        return response.data
    } catch (error) {
        const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

