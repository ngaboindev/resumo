import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container className="my-5">
      <Row class="justify-content-center">
        <Col xs={12} md={12}>
          <Card>
            <Card.Body>{children}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
