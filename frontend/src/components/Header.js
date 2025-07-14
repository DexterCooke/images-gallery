import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "#eeeeee",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <a href="/">
          <Logo alt={title} style={{ maxWidth: "12rem", maxHeight: "2rem" }} />
        </a>
      </Container>
    </Navbar>
  );
};

export default Header;
