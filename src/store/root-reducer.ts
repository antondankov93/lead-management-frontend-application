import { combineReducers } from '@reduxjs/toolkit';

import leadReducer from '@/store/leads/slice';

export const rootReducer = combineReducers({
  //auth: authReducer,
  leadSlice: leadReducer,
});

