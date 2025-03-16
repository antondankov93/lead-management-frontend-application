import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '@/store'

const selectLeads = (state: RootState) => state.leadSlice

export const selectLeadsList = createSelector([selectLeads], (state) => state.leads)
