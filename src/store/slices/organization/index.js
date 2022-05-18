import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ENDPOINT_PUBLIC } from "services/settings"
import { getService, updateService } from 'services/apiService'
import { useDispatch } from 'react-redux';
const initialState = {
  organization: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  list:{}
}
const initialIdOrganization=1;
export const organizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
      setOrganization: (state,action) => {
        state.list = action.payload
      },
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
        state.organization = []
      },
    },
    extraReducers:(builder) => {
      builder
      .addCase(updateOrganization.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(updateOrganization.fulfilled, (state, action) => {
          const updatedOrganization = state.Organization.map(e => e.id === action.payload.id ? action.payload.data : e )
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
          state.Organization = updatedOrganization
      })
      .addCase(updateOrganization.rejected, (state, action) => {
          state.isLoading = false
          state.isSuccess = false
          state.isError = true
          state.message = action.payload
      })
      
        
    }
})

export const { setOrganization } = organizationSlice.actions

export default organizationSlice.reducer

export const fetchOrganizationDataPublic =  () => async (dispatch) => {
    try {
      console.log()
      console.log(`${ENDPOINT_PUBLIC}/${initialIdOrganization}`)
        const response = await getService(ENDPOINT_PUBLIC)
        dispatch(setOrganization(response.data))
    } catch (error) {
        console.log(error.message)
    }
}

/*export const fetchOrganizationDataPublic = createAsyncThunk('organization',async (dispatch,thunkAPI) => {
  try {
      const response = await getService(ENDPOINT_PUBLIC)     
      console.log(dispatch)
      return response.data
  } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
  }
}) */

export const updateOrganization = createAsyncThunk('update/organization', async (data, thunkAPI) => {
  try {
      const {id, ...organization} = data
      const response = await updateService(ENDPOINT_PUBLIC, id, organization)
      return response.data
  } catch (error) {
      const message = (error.response.data?.msg || error.response.data) || (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
  }
})