import React from "react";

import { useAppDispatch, useAppSelector } from "../../app/components/ReduxHooks";
import {
  handleEraseCookies,
  handleMode,
  selectMode,
} from "../../app/components/reduxSlices/CookiesSlice";
import { selectCount } from "../../app/components/reduxSlices/counterSlice";
import {
  HandleEmail,
  HandleEnabled,
  HandlePassword,
  selectEmail,
  selectEnabled,
  selectPass,
} from "../../app/components/reduxSlices/FormSlice";
import GlobalButton from "../../GlobalComponents/GlobalButton";
import { ToApp } from "../../GlobalComponents/styledGlobalComponents";
import {
  Container,
  Footer,
  Header,
  Main,
  Sidebar,
  Widget,
} from "../../styles/Model";

const Home = () => {
  const email = useAppSelector(selectEmail);
  const pass = useAppSelector(selectPass);
  const enabled = useAppSelector(selectEnabled);
  const DarkMode = useAppSelector(selectMode);
  const count = useAppSelector(selectCount);

  const dispatch = useAppDispatch();

  function prueba() {
    dispatch(HandleEmail("k"));
    dispatch(HandlePassword("j"));
    dispatch(HandleEnabled(!enabled));
    dispatch(handleMode(!DarkMode));
  }
  return (
    <>
      <Container className="contenedor">
        <Header className="header">
          <h1>Header</h1>
        </Header>

        <Main className="contenido">
          <h2>Contador en appCount {count}</h2>
          <p>Lorem Ejemplo</p>
        </Main>

        <Sidebar className="sidebar">
          <ToApp to={"/app"}>vamos directo para APP</ToApp>{" "}
        </Sidebar>

        <Widget className="widget-1">
          <GlobalButton name="suma" handleFunction={() => prueba()} />
        </Widget>
        <Widget className="widget-2">
          {email}-{pass}-{enabled ? 1 : 0}
        </Widget>

        <Footer className="footer">
          <GlobalButton
            name="suma"
            handleFunction={() => dispatch(handleEraseCookies())}
          />
          {DarkMode ? "true" : "False"}
        </Footer>
      </Container>
    </>
  );
};

export default Home;
