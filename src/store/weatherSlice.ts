import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Weather } from "@/types";

export const fetchWeather = createAsyncThunk(
  'weather/fetch',
  async (cityId: string) => {
    const res = await axios.get(`https://weather.tsukumijima.net/api/forecast/city/${cityId}`);
    return res.data;
  }
);

interface WeatherState {
  data: Weather | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    status: 'idle',
  } as WeatherState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = 'failed';
        state.data = null;
      });
  },
});

export default weatherSlice.reducer;
