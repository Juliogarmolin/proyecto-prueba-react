import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSeries = createAsyncThunk('series/fetchSeries', async () => {
    const response = await fetch('/data/sample.json');
    const data = await response.json();
    return data.entries; 
  });

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.loading = false;
        // Guardamos todos los items, sin filtrar todavía (filtraremos en el componente)
        state.items = action.payload;
      })
      .addCase(fetchSeries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default seriesSlice.reducer;
