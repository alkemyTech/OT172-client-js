import { createSlice } from '@reduxjs/toolkit'
import { ENDPOINT_PUBLIC } from "services/settings"
import { getService } from 'services/apiService'

export const organizationSlice = createSlice({
    name: 'organization',
    initialState: {
        list: {}
    },
    reducers: {
    setOrganization: (state,action) => {
        state.list = action.payload
    }
    }
})

export const { setOrganization } = organizationSlice.actions

export default organizationSlice.reducer

export const fetchOrganizationDataPublic =  () => async (dispatch) => {
    try {
        const response = await getService(ENDPOINT_PUBLIC)
        dispatch(setOrganization(response.data))
    } catch (error) {
        console.log(error.message)
    }
}