import styled from "styled-components";

export const Container = styled.div`
  border-style: solid;
  border-width: 1px;
  height: 90vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "card1 card2 card3 card4 card5 card6 ."
    ". . . . . . ."
    ". . . . . . ."
    "card7 card8 card9 card10 card11 card12 .";
  grid-gap: 5%;
  padding-left: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
`;

export const DivCards = styled.div`
  grid-area: ${(props) => props.area};

  width: 100%;
  height: 100%;
`;

export const ImgCardShow = styled.img`
  width: 100%;
  height: 100%;
`;
export const Header = styled.header`
  background: blue;
  color: #fff;
  grid-area: header; //área

  & > h1 {
    margin-left: 2%;
  }
`;

export const Main = styled.main`
  padding-left: 2%;
  grid-area: contenido; //área
`;

export const Sidebar = styled.aside`
  background: orange;
  min-height: 100px;
  grid-area: sidebar; //área

  /*flexbox para acomodar elementos*/

  display: flex;
  align-items: center;
  justify-content: center; //área
`;

export const Widget = styled.div`
  background: orchid;
  height: 100px;
  grid-area: ${(props) =>
    props.className === "widget-1" ? "widget-1" : "widget-2"}; //área

  /*flexbox para acomodar elementos*/

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  padding: 20px;
  background: maroon;
  color: #fff;
  grid-area: footer; //área
`;
