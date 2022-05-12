import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteService, getService, postService, updateService } from 'services/apiService'
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
            .addCase(createCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.categories = [...state.categories, action.payload] 
            })
            .addCase(createCategories.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteCategories.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(deleteCategories.fulfilled, (state, action) => {
                const filteredCategories = state.categories.filter(e => e.id !== action.payload)
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.categories = filteredCategories
            })
            .addCase(deleteCategories.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateCategories.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(updateCategories.fulfilled, (state, action) => {
                const updatedCategories = state.categories.map(e => e.id === action.payload.id ? action.payload.data : e )
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.categories = updatedCategories
            })
            .addCase(updateCategories.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = categorySlice.actions

export default categorySlice.reducer

export const createCategories = createAsyncThunk('create/categories', async (data, thunkAPI) => {
    try {
         const response = await postService(ENDPOINT_CATEGORIES, data)
        return data
    } catch (error) {
        const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchAllCategories = createAsyncThunk('categories', async (thunkAPI) => {
    try {
        const data = await getService(ENDPOINT_CATEGORIES)
        return data.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteCategories = createAsyncThunk('delete/categories', async (id, thunkAPI) => {
    try {
         const response = await deleteService(ENDPOINT_CATEGORIES, id)
        return id
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateCategories = createAsyncThunk('update/categories', async (data, thunkAPI) => {
    try {
        const {id, ...category} = data
         const response = await updateService(ENDPOINT_CATEGORIES, id, category)
        return {data}
    } catch (error) {
        const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})