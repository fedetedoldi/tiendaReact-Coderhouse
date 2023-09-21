import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
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
              <ItemCount/>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
