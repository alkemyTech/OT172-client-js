import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteService, getService, postService, updateService } from 'services/apiService'
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
        .addCase(createNews.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createNews.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.news = [...state.news, action.payload] 
        })
        .addCase(createNews.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
      })
      .addCase(deleteNews.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
          const filteredNews = state.News.filter(e => e.id !== action.payload)
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
          state.News = filteredNews
      })
      .addCase(deleteNews.rejected, (state, action) => {
          state.isLoading = false
          state.isSuccess = false
          state.isError = true
          state.message = action.payload
      })
      .addCase(updateNews.pending, (state) => {
          state.isLoading = true
          state.isSuccess = false
          state.isError = false
      })
      .addCase(updateNews.fulfilled, (state, action) => {
          const updatedNews = state.News.map(e => e.id === action.payload.id ? action.payload.data : e )
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
          state.News = updatedNews
      })
      .addCase(updateNews.rejected, (state, action) => {
          state.isLoading = false
          state.isSuccess = false
          state.isError = true
          state.message = action.payload
      })
    },
  })

export const { reset } = newSlice.actions

export default newSlice.reducer

export const createNews = createAsyncThunk('create/news', async (data, thunkAPI) => {
  try {
      const response = await postService(ENDPOINT_NEWS, data)
      return data
  } catch (error) {
      const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
  }
})
export const fetchAllNews = createAsyncThunk('news',async (thunkAPI) => {
    try {
        const data = await getService(ENDPOINT_NEWS)
        return data.data.newsList
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}) 

export const deleteNews = createAsyncThunk('delete/news', async (id, thunkAPI) => {
  try {
       const response = await deleteService(ENDPOINT_NEWS, id)
      return id
  } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
  }
})
export const updateNews = createAsyncThunk('update/news', async (data, thunkAPI) => {
  try {
      const {id, ...news} = data
      const response = await updateService(ENDPOINT_NEWS, id, news)
      return {data}
  } catch (error) {
      const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
  }
})