import { createSlice } from '@reduxjs/toolkit'
import { getService } from 'services/apiService'
import { ENDPOINT_NEWS } from "services/settings"

export const newSlice = createSlice({
    name: 'news',
    initialState: {
        list: []
    },
    reducers: {
    setNewsList: (state,action) => {
        state.list = action.payload
    }
    }
})

export const { setNewsList } = newSlice.actions

export default newSlice.reducer

export const fetchAllNews = () => async (dispatch) => {
    try {
        const response = await getService(ENDPOINT_NEWS)
        dispatch(setNewsList(response.data.newsList))
    } catch (error) {
        console.log(error.message)
    }
}