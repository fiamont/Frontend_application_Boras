import "./Navigation.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import MenuPart from "./MenuPart";

/*En navigeringsbar (överst på sidan). Visas olika med hjälp av props beroende på om man befinner sig på inloggningssidan eller ej. Använder useState för att expandera och kollapsa en “hamburger”-meny i mobilläge.*/
function Navigation(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      expand="md"
      className={`${props.isLoginPage ? "navigation-login" : "navigation-default"} p-2 d-flex gap-2 align-items-center`}
    >
      <Container fluid>
        <Link
          className="navigation-link"
          to={props.isLoginPage ? "/" : "/start"}
        >
          <h1>Klimatinfo</h1>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {expanded ? (
            <RxCross1
              className={`${props.isLoginPage ? "navigation-login" : "navigation-default"}`}
            />
          ) : (
            <RxHamburgerMenu
              className={`${props.isLoginPage ? "navigation-login" : "navigation-default"}`}
            />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Link to={props.isLoginPage ? "/" : "/start"}>Start</Link>
            <MenuPart isLoginPage={props.isLoginPage} />
            <Link to={props.isLoginPage ? "/" : "/profil"}>
              {props.isLoginPage ? "Logga in" : "Profil"}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
