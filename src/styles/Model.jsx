import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "card1 card2 card3 card4 card5 card6 pun"
    ". jugar pedir fin menu . pun"
    ". . . . . . yo"
    "card7 card8 card9 card10 card11 card12 yo";
  padding-top: 2%;
  align-items: center;
  justify-items: center;
`;

export const DivCards = styled.div`
  grid-area: ${(props) => props.area};

  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgCardShow = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  grid-area: ${(props) => props.area};
  border-style: solid;
  border-width: 1px;
  height: 2rem;
  border-radius: 20px;
  cursor: pointer;
  width: 80%;
`;

export const Puntaje = styled.div`
  grid-area: ${(props) => props.area};
  border-style: solid;
  border-width: 1px;
  width: 80%;
  height: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
`;

export const Pjugador = styled.p`
  width: 80%;
  text-align: center;
`;

export const DivPuntuacion = styled.div`
  background: grey;
  width: 80%;
  color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;
