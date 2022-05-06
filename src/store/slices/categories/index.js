import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getService } from 'services/apiService'
import { ENDPOINT_CATEGORIES } from "services/settings"

const initialState = {
    categories: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
            state.categories = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.categories = action.payload
            })
            .addCase(fetchAllCategories.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.categories = []
            })
            // .addCase(deleteUser.pending, (state) => {
            //     state.isLoading = true
            // })
            // .addCase(deleteUser.fulfilled, (state, action) => {
            //     console.log('id: ', action.payload);
            //     const filteredUsers = state.users.filter(e => e.id !== action.payload)
            //     state.isLoading = false
            //     state.isSuccess = true
            //     state.users = filteredUsers
            // })
            // .addCase(deleteUser.rejected, (state, action) => {
            //     state.isLoading = false
            //     state.isError = true
            //     state.message = action.payload
            //     state.users = []
            // })
    },
})

export const { reset } = categorySlice.actions

export default categorySlice.reducer

export const fetchAllCategories = createAsyncThunk('categories', async (thunkAPI) => {
    try {
        const data = await getService(ENDPOINT_CATEGORIES)
        console.log(data.data);
        return data.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})