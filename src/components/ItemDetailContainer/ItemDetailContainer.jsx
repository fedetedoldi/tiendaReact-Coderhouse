import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = ({ productData }) => {
  return (
    <Container className="mt-4">
      <Row xs="auto">
        <Col style={{ marginBottom: "20px" }}>
          <Card
            bg="dark"
            text="light"
            border="light"
            style={{ width: "18rem", height: "100%" }}
            className="text-center"
          >
            <Card.Header>ULTIMAS {productData.stock} UNIDADES!!!</Card.Header>
            <Card.Img
              variant="top"
              src={productData.thumbnail}
              style={{ width: "100%", height: "275px" }}
            />
            <Card.Body>
              <Card.Title>{productData.title}</Card.Title>
              <Card.Text>{productData.description}</Card.Text>
              <Card.Text>Marca: {productData.brand}</Card.Text>
              <Card.Text>Precio: ${productData.price}</Card.Text>
              <Card.Text>Valoración: {productData.rating} ★</Card.Text>
              <ItemCount stock={productData.stock} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
