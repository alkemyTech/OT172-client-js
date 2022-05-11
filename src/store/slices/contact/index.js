import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteService, getService } from 'services/apiService'
import { ENDPOINT_CONTACTS } from "services/settings"


const initialState = {
    contacts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const contactsSlice= createSlice({
    name: 'contacts',
    initialState,
    reducers: {
          reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
            state.contacts = []
        },
        addMessage: (state,action)=>{
            state.push(action.payload)
        }
    },
    extraReducers: (builder) => {
      builder
          .addCase(fetchAllContacts.pending, (state) => {
              state.isLoading = true
          })
          .addCase(fetchAllContacts.fulfilled, (state, action) => {
              state.isLoading = false
              state.isSuccess = true
              state.contacts = action.payload
          })
          .addCase(fetchAllContacts.rejected, (state, action) => {
              state.isLoading = false
              state.isError = true
              state.message = action.payload
              state.contacts = []
          })
          /*.addCase(deleteContact.pending, (state) => {
              state.isLoading = true
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
              const filteredContacts = state.contacts.filter(e => e.id !== action.payload)
              state.isLoading = false
              state.isSuccess = true
              state.contacts = filteredContacts
          })
          .addCase(deleteContact.rejected, (state, action) => {
              state.isLoading = false
              state.isError = true
              state.message = action.payload
              state.Contacts = []
          })*/
  },
})

export const { setContactList, reset }= contactsSlice.actions

export default contactsSlice.reducer

export const fetchAllContacts = createAsyncThunk('contacts', async (thunkAPI) => {
  try {
      const data = await getService(ENDPOINT_CONTACTS)
      return data.data
  } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
  }
})