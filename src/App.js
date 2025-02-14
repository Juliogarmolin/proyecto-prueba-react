import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Link } from "react-router-dom";

// Importa la imagen
import logoGray from "./assets/placeholder.png";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="cards">
          {/* Tarjeta 1: SERIES */}
          <div className="card-item">
            <Link to="/series" style={{ textDecoration: "none", color: "inherit" }}>
              <div
                className="card"
                style={{
                  backgroundImage: `url(${logoGray})`,
                  cursor: "pointer",
                }}
              >
                <h2>SERIES</h2>
              </div>
            </Link>
            <p>Popular Series</p>
          </div>

          {/* Tarjeta 2: MOVIES */}
          <div className="card-item">
            <Link to="/movies" style={{ textDecoration: "none", color: "inherit" }}>
              <div
                className="card"
                style={{
                  backgroundImage: `url(${logoGray})`,
                  cursor: "pointer",
                }}
              >
                <h2>MOVIES</h2>
              </div>
            </Link>
            <p>Popular Movies</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
