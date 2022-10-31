import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreateStudent extends Component {
  render() {
    return (
      <div class="form-wrapper">
        <Form>
          <Form.Group controlId="Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="Name">
            <Form.Label>Código</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
            Crear Estudiantes
          </Button>
        </Form>
      </div>
    );
  }
}


