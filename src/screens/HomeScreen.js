import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <div className="my-4">
        <Row className="justify-content-center align-items-center">
          <Col>
            <h2>Resumo.</h2>
            <p>
              This is a tool that helps you to create a resume that you can
              download in PDF format, you can get started by clicking the button
              below.
            </p>
            <LinkContainer to="/create">
              <Button variant="primary">Create</Button>
            </LinkContainer>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomeScreen;
