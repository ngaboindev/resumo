import { Button, Form } from "react-bootstrap";
import React from "react";
import FormContainer from "./FormContainer";

const BasicInfo = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer>
      <>
        <h3>{props.title}</h3>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              id="firstName"
              name="firstName"
              value={props.getState("firstName")}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={props.getState("lastName")}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Job title</Form.Label>
            <Form.Control
              type="text"
              id="job"
              name="job"
              placeholder="Enter your job title"
              value={props.getState("job")}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Professional Summary</Form.Label>
            <br />
            <Form.Text>
              Include 2-3 clear sentences about your overall experience
            </Form.Text>
            <Form.Control
              as="textarea"
              row="3"
              id="summary"
              name="summary"
              value={props.getState("summary")}
              onChange={props.handleChange}
            ></Form.Control>
          </Form.Group>
        </Form>
        <div class="py-2">
          <Button variant="info" type="button" onClick={props.next}>
            Next
          </Button>
        </div>
      </>
    </FormContainer>
  );
};

export default BasicInfo;
