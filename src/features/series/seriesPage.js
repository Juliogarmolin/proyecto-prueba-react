import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSeries } from "./seriesSlice";
import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    opacity: 0.8;
    border: 2px solid #fff;
  }
`;

const Poster = styled.img`
  width: 100%;
  display: block;
  border-radius: 4px;
`;

const CardTitle = styled.h3`
  text-align: center;
  margin: 5px 0;
  font-size: 1rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  color: #000;
  padding: 20px;
  max-width: 600px;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const SeriesPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.series);

  // Estado para controlar qué item se está viendo en el popup
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(fetchSeries());
  }, [dispatch]);

  // Manejo de estados de carga y error
  if (loading) return <Container>Cargando series...</Container>;
  if (error) return <Container>Ocurrió un error: {error}</Container>;

  // Filtrar, ordenar y tomar los primeros 20
  const filteredSeries = items
    .filter((item) => item.programType === "series" && item.releaseYear >= 2010)
    .sort((a, b) => a.title.localeCompare(b.title)) // Orden alfabético
    .slice(0, 20); // Primeros 20

  // Abrir el popup
  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  // Cerrar el popup
  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <>
    <Header />
    <Container>
      <Grid>
        {filteredSeries.map((serie) => (
          <Card key={serie.title} onClick={() => handleSelect(serie)}>
            <Poster src={serie.images["Poster Art"].url} alt={serie.title} />
            <CardTitle>{serie.title}</CardTitle>
          </Card>
        ))}
      </Grid>

      {selectedItem && (
        <ModalOverlay onClick={handleClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClose}>X</CloseButton>
            <h2>{selectedItem.title}</h2>
            <img
              src={selectedItem.images["Poster Art"].url}
              alt={selectedItem.title}
              style={{ width: "200px" }}
            />
            <p>{selectedItem.description}</p>
            <p>Release Year: {selectedItem.releaseYear}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
    <Footer /></>
  );
};

export default SeriesPage;
