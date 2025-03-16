import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import { User } from '@/types/common'

type AuthState = {
  user: User | undefined
}

const initialState: AuthState = {
  user: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = undefined
    },
  },
})

export const { setUser, logout } = authSlice.actions

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
}
export default persistReducer(persistAuthConfig, authSlice.reducer)
