import "./Navigation.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

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
        <Link className="navigation-link" to="/start">
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
            <Link to="/start">Start</Link>
            <NavDropdown title="Utveckling" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/lektion">
                Koldioxidutsläpp
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lektion">
                Globala temperaturer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lektion">
                Glaciärstorlekar
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/profil">
              {props.isLoginPage ? "Logga in" : "Profil"}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
