import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteService, getService, postService, updateService, updateServiceImg } from 'services/apiService'
import { ENDPOINT_ACTIVITIES } from "services/settings"

const initialState = {
    activities: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const activitySlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
            state.activities = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllActivities.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllActivities.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.activities = action.payload
            })
            .addCase(fetchAllActivities.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.activities = []
            })
            .addCase(createActivities.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createActivities.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.activities = [...state.activities, action.payload] 
            })
            .addCase(createActivities.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteActivities.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(deleteActivities.fulfilled, (state, action) => {
                const filteredActivities = state.activities.filter(e => e.id !== action.payload)
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.activities = filteredActivities
            })
            .addCase(deleteActivities.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateActivities.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(updateActivities.fulfilled, (state, action) => {
                const updatedActivities = state.activities.map(e => e.id === action.payload.id ? action.payload : e )
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.activities = updatedActivities
            })
            .addCase(updateActivities.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = activitySlice.actions

export default activitySlice.reducer

export const createActivities = createAsyncThunk('create/activities', async (data, thunkAPI) => {
    try {
         const response = await postService(ENDPOINT_ACTIVITIES, data, data.image !== null)
        return data
    } catch (error) {
        const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchAllActivities = createAsyncThunk('activities', async (thunkAPI) => {
    try {
        const data = await getService(ENDPOINT_ACTIVITIES)
        return data.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteActivities = createAsyncThunk('delete/activities', async (id, thunkAPI) => {
    try {
         const response = await deleteService(ENDPOINT_ACTIVITIES, id)
        return id
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateActivities = createAsyncThunk('update/activities', async (data, thunkAPI) => {
    try {
        const {id, ...activity} = data
         const response = await updateService(ENDPOINT_ACTIVITIES, id, activity, activity.image !== null)
        return response.data
    } catch (error) {
        const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

