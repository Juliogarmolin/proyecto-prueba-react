import { configureStore } from '@reduxjs/toolkit';
import seriesReducer from './features/series/seriesSlice';
import moviesReducer from './features/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    series: seriesReducer,
   movies: moviesReducer,
  },
});