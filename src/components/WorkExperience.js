import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Row, Col, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import FormContainer from "./FormContainer";

const WorkExperience = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (current) {
      setEndDate("Present");
    }
  }, [current]);

  const submitHandler = (e) => {
    e.preventDefault();
    props.setState("experiences", [
      ...props.getState("experiences", []),
      {
        title,
        type,
        company,
        startDate,
        endDate,
        description,
      },
    ]);

    handleClose();
    setTitle("");
    setType("");
    setCompany("");
    setStartDate(null);
    setEndDate(null);
    setCurrent(false);
    setDescription("");
  };

  const deleteExperience = (index) => {
    const newArr = props.getState("experiences", []);
    newArr.splice(index, 1);
    props.setState("experiences", newArr);
  };

  return (
    <FormContainer>
      <>
        <h3>{props.title}</h3>

        {props.getState("experiences") !== undefined &&
          props.getState("experiences").map((experience, index) => (
            <Card className="my-4">
              <Card.Header>
                <p className="py-2">{experience.title}</p>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <p>
                      {experience.startDate} - {experience.endDate}{" "}
                    </p>
                  </Col>
                  <Col>
                    <div className="text-end">
                      <Button
                        onClick={() => deleteExperience(index)}
                        variant="danger"
                        className="btn-sm"
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}

        <Button variant="light" type="button" onClick={handleShow}>
          Add a work experience
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Work Experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Job Title"
                    />
                  </Col>
                  <Col>
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                      type="text"
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="company"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      name="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      type="date"
                    />
                  </Col>
                  <Col>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      name="endDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      type={current ? "text" : "date"}
                      disabled={current}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  name="current"
                  checked={current}
                  onChange={(e) => setCurrent(e.target.checked)}
                  label="I currently work here"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Job description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  row="3"
                ></Form.Control>
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

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

export default WorkExperience;
