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
import { useCollection } from "../../hooks/useCollection";

const NavBar = () => {
  const { data, loading } = useCollection("categories");

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            Tienda Online
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Inicio
              </Link>
            </Nav.Link>
            {loading ? null : (
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                {data[0].categories.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index}>
                      <Link
                        to={`/category/${category}`}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                      >
                        {category}
                      </Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            )}
            <Nav.Link href="#nosotros">
              <Link
                to="/nosotros"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Nosotros
              </Link>
            </Nav.Link>
            <Nav.Link href="#contact">
              <Link
                to="/contacto"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Contacto
              </Link>
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
