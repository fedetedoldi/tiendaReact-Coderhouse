import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">Tienda Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Muebles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Electrónica
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ropa</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
};

export default NavBar;
