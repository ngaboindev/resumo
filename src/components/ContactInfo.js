import { Button, Form } from "react-bootstrap";
import React from "react";
import FormContainer from "./FormContainer";

const ContactInfo = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer>
      <>
        <h3>{props.title}</h3>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              id="city"
              name="city"
              value={props.getState("city")}
              onChange={props.handleChange}
              placeholder="Enter your City"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              id="state"
              name="state"
              value={props.getState("state")}
              onChange={props.handleChange}
              placeholder="Enter your State"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={props.getState("email")}
              onChange={props.handleChange}
              placeholder="Enter your Email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Website (optional)</Form.Label>
            <Form.Control
              type="text"
              id="web"
              name="web"
              placeholder="Enter your website"
              value={props.getState("website")}
              onChange={props.handleChange}
            />
          </Form.Group>
        </Form>
        <div class="py-2">
          <Button
            variant="dark"
            className="mx-2"
            type="button"
            onClick={props.prev}
          >
            Prev
          </Button>
          <Button variant="info" type="button" onClick={props.next}>
            Next
          </Button>
        </div>
      </>
    </FormContainer>
  );
};

export default ContactInfo;
