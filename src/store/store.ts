import { configureStore } from '@reduxjs/toolkit';
import zipReducer from '@/store/zipSlice';
import weatherReducer from '@/store/weatherSlice';

export const store = configureStore({
  reducer: {
    zip: zipReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
