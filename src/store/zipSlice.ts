import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAddress = createAsyncThunk(
  'zip/fetchAddress',
  async (zipcode: string) => {
    const res = await axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`);
    return res.data.results || [];
  }
);

const zipSlice = createSlice({
  name: 'zip',
  initialState: {
    results: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = 'failed';
        state.results = [];
      });
  },
});

export default zipSlice.reducer;
