import { combineReducers } from '@reduxjs/toolkit'

import leadReducer from '@/store/leads/slice'
import authReducer from '@/store/auth/slice'

export const rootReducer = combineReducers({
  leadSlice: leadReducer,
  authSlice: authReducer,
})
