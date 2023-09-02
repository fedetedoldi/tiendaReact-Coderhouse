import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat(" ...")
      : value;
  };
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        const productsWithQuantity = res.data.products.map((product) => ({
          ...product,
          selectedQuantity: 0,
        }));
        setProducts(productsWithQuantity);
      })
      .catch((err) => {
        console.error("Error al obtener datos:", err);
        setError("Error al obtener datos. Por favor, inténtelo de nuevo más tarde.");
      });
  }, []);

  // Función para aumentar el stock
  const handleIncrement = (product) => {
    setProducts((prevProducts) => {
      return prevProducts.map((p) => {
        if (p.id === product.id && p.stock > 0 ) {
          const updatedStock = p.stock - 1; // Actualiza el stock
          return {
            ...p,
            selectedQuantity: p.selectedQuantity + 1,
            stock: updatedStock,
          };
        }
        return p;
      });
    });
  };

  // Función para disminuir el stock
  const handleDecrement = (product) => {
    setProducts((prevProducts) => {
      return prevProducts.map((p) => {
        if (p.id === product.id && p.selectedQuantity > 0) {
          const updatedStock = p.stock + 1; // Actualiza el stock
          return {
            ...p,
            selectedQuantity: p.selectedQuantity - 1,
            stock: updatedStock,
          };
        }
        return p;
      });
    });
  };

  return (
    <Container className="mt-4">
      {error && <p>{error}</p>}
      <Row xs="auto">
        {products.map((product) => (
          <Col key={product.id} style={{ marginBottom: "20px" }}>
            <Card
              border="light"
              style={{ width: "18rem", height: "100%" }}
              className="text-center"
            >
              <Card.Img
                variant="top"
                src={product.thumbnail}
                style={{ width: "100%", height: "200px" }}
              />
              <Card.Body>
                <Card.Header>{product.title}</Card.Header>
                <Card.Text>{showShortValue(product.description)}</Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    {" "}
                    Categoria: {product.category}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    Disponibles: {product.stock}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>$ {product.price} </ListGroup.Item>
                </ListGroup>
                <Button
                  variant="outline-dark"
                  onClick={() => handleDecrement(product)}
                >
                  -1
                </Button>{' '}
                <Button type="submit" variant="dark">Agregar al carrito</Button>{' '}
                <Button
                  variant="outline-dark"
                  onClick={() => handleIncrement(product)}
                >
                  +1
                </Button>
              </Card.Body>
              <Card.Footer >Cantidad seleccionada: {product.selectedQuantity} </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
