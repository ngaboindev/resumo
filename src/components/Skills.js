import { Button, Form } from "react-bootstrap";
import React from "react";
import TagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import FormContainer from "./FormContainer";

const Skills = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer>
      <>
        <h3>{props.title}</h3>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Skills</Form.Label>
            <TagInput
              tags={props.getState("skills", [])}
              onChange={(newTags) => props.setState("skills", newTags)}
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

export default Skills;
