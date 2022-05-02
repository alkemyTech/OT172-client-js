import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getService } from 'services/apiService'
import { ENDPOINT_NEWS } from "services/settings"

const initialState = {
    news: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const newSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
            state.news = []
          },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllNews.pending, (state) => {
          state.isLoading = true
        })
        .addCase(fetchAllNews.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.news = action.payload
        })
        .addCase(fetchAllNews.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.news = []
        })
    },
  })

export const { reset } = newSlice.actions

export default newSlice.reducer

export const fetchAllNews = createAsyncThunk('news',async (thunkAPI) => {
    try {
        const data = await getService(ENDPOINT_NEWS)
        console.log('la data', data);
        return data.data.newsList
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}) 