import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Tienda Online</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Inicio</Link>
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/category/smartphones">Smartphones</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/laptops">Laptops</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/fragrances">Fragrances</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/skincare">Skincare</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/groceries">Groceries</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/home-decoration">Home-Decoration</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#nosotros">
              <Link to="/nosotros">Nosotros</Link>
            </Nav.Link>
            <Nav.Link href="#contact">
              <Link to="/contacto">Contacto</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Enviar</Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
