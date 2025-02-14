import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import SeriesPage from "./features/series/seriesPage";
import MoviesPage from "./features/movies/moviesPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Ruta de la Home */}
        <Route path="/" element={<App />} />

        {/* Rutas para Series y Movies */}
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;