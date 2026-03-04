import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function MenuPart() {
  return (
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
  );
}

export default MenuPart;
