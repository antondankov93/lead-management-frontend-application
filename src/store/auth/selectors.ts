import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/store'

const selectAuth = (state: RootState) => state.authSlice

export const selectUser = createSelector([selectAuth], (state) => state.user)
