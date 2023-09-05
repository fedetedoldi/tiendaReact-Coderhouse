import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

const ItemListContainer = ({ productsData }) => {
  const navigate = useNavigate();
  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat(" ...")
      : value;
  };

  return (
    <Container className="mt-4">
      <Row xs="auto">
        {productsData.map((product) => {
          return (
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
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{showShortValue(product.description)}</Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item> Marca: {product.brand} </ListGroup.Item>{" "}
                    <ListGroup.Item >$ {product.price} </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      Disponibles: {product.stock} unidades{" "}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="outline-primary"
                    onClick={() => navigate(`/item/${product.id}`)}
                  >
                    + info
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
