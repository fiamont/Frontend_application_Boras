import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function MenuPart(props) {
  return (
    <NavDropdown title="Utveckling" id="basic-nav-dropdown">
      <NavDropdown.Item
        as={Link}
        to={props.isLoginPage ? "/" : "/lektion/koldioxidutslapp"}
      >
        Koldioxidutsläpp
      </NavDropdown.Item>
      <NavDropdown.Item
        as={Link}
        to={props.isLoginPage ? "/" : "/lektion/globalatemperaturer"}
      >
        Globala temperaturer
      </NavDropdown.Item>
      <NavDropdown.Item
        as={Link}
        to={props.isLoginPage ? "/" : "/lektion/glaciarstorlekar"}
      >
        Glaciärstorlekar
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default MenuPart;
