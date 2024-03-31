import {configureStore} from '@reduxjs/toolkit';
import tagReducer from './slices/tagSlice';
import sortTagReducer from './slices/sortTagSlice';

export const store = configureStore({
   reducer: {
      tags: tagReducer,
      sortTag: sortTagReducer,
   },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
