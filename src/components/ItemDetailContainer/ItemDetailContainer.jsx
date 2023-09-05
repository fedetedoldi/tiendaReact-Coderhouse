import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemDetailContainer = ({ productData }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [productStock, setProductStock] = useState(productData.stock);

  const handleIncrement = () => {
    if (productData.stock > 0 && selectedQuantity < productData.stock) {
      console.log(productData.stock);
      setSelectedQuantity(selectedQuantity + 1);
      setProductStock(productData.stock - 1);
    }
  };

  const handleDecrement = () => {
    if (selectedQuantity > 0) {
      console.log(productData.stock);
      setSelectedQuantity(selectedQuantity - 1);
      setProductStock(productData.stock + 1);
    }
  };

  return (
    <Container className="mt-4">
      <Row xs="auto">
        <Col style={{ marginBottom: "20px" }}>
          <Card
            border="light"
            style={{ width: "18rem", height: "100%" }}
            className="text-center"
          >
            <Card.Header>Categoria: {productData.category} </Card.Header>
            <Card.Img
              variant="top"
              src={productData.thumbnail}
              style={{ width: "100%", height: "200px" }}
            />
            <Card.Body>
              <Card.Title>{productData.title}</Card.Title>
              <Card.Text>{productData.description}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item> Marca: {productData.brand} </ListGroup.Item>{" "}
                <ListGroup.Item>$ {productData.price}</ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Disponibles: {productData.stock} unidades{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Valoracion: {productData.rating}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline-dark" onClick={handleDecrement}>
                -1
              </Button>{" "}
              <Button variant="dark">Agregar el carrito</Button>{" "}
              <Button variant="outline-dark" onClick={handleIncrement}>
                +1
              </Button>
              Cantidad seleccionada: {selectedQuantity}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
