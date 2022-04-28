import { createSlice } from '@reduxjs/toolkit'
import { ENDPOINT_CATEGORIES } from "../../../services/settings"


import axios from 'axios'

export const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        list: []
    },
    reducers: {
    setCategoriesList: (state,action) => {
        state.list = action.payload
    }
    }
})

export const { setCategoriesList } = categorySlice.actions

export default categorySlice.reducer

export const fetchAllCategories = () => (dispatch) => {
    axios
    .get(ENDPOINT_CATEGORIES)
    .then((res) => {
    dispatch(setCategoriesList(res.data))
    })
    .catch((err) => console.log(err.message))
}