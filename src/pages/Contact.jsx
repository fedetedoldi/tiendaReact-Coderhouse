import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Contact = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control type="name" placeholder="Ingrese su nombre y apellido" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
        <Form.Text className="text-muted">
          Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Contact;
