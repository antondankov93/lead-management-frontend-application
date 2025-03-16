import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Lead } from '@/types/common'
import storage from 'redux-persist/lib/storage/session'
import { persistReducer } from 'redux-persist'

const initialState: { leads: Lead[] } = {
  leads: [],
}

const leadSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    setLead: (state, action: PayloadAction<Lead>) => {
      state.leads = [...state.leads, action.payload]
    },
  },
})

export const { setLead } = leadSlice.actions

const persistLeadsConfig = {
  key: 'leads',
  storage,
  whitelist: ['leads'],
}
export default persistReducer(persistLeadsConfig, leadSlice.reducer)
