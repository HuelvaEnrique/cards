import React from "react";
import {
  Button,
  Container,
  DivCards,
  DivPuntuacion,
  ImgCardShow,
  Pjugador,
  Puntaje,
} from "../../styles/Model";

import img1 from "../../assets/cartas/044.jpg";
import img2 from "../../assets/cartas/063.jpg";
import img3 from "../../assets/cartas/10.jpg";
import img4 from "../../assets/cartas/138.jpg";
import img5 from "../../assets/cartas/168.jpg";
import img6 from "../../assets/cartas/175.jpg";
import img7 from "../../assets/cartas/201.jpg";
import img8 from "../../assets/cartas/226.jpg";
import img9 from "../../assets/cartas/236.jpg";
import img10 from "../../assets/cartas/25B.jpg";
import img11 from "../../assets/cartas/272.jpg";
import img12 from "../../assets/cartas/287.jpg";
const cardpikachu = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const cardBack =
  "https://cloud10.todocoleccion.online/trading-cards/tc/2019/09/09/19/176009409_157870472_tcimg_6DA7CDB1.jpg";
const Home = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Container className="contenedor">
      {cards.map((item: number, index: number) => {
        return (
          <DivCards key={index} area={`card${item}`}>
            {item > 6 ? (
              <ImgCardShow alt="carta" src={cardpikachu[index]} />
            ) : (
              <ImgCardShow alt="carta" src={cardBack} />
            )}
          </DivCards>
        );
      })}
      <Button area="jugar">Jugar</Button>
      <Button area="pedir">Pedir</Button>
      <Button area="fin">Finalizar turno</Button>
      <Button area="menu">Menu principal</Button>
      <Puntaje area="pun">
        <Pjugador>Puntuacion</Pjugador>
        <Pjugador>Oponente</Pjugador>
        <DivPuntuacion>
          <Pjugador>86</Pjugador>
        </DivPuntuacion>
      </Puntaje>
      <Puntaje area="yo">
        <Pjugador>Puntuacion</Pjugador>
        <Pjugador>Enrique</Pjugador>
        <DivPuntuacion>
          <Pjugador>86</Pjugador>
        </DivPuntuacion>
      </Puntaje>
    </Container>
  );
};

export default Home;
