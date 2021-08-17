import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaMapPin, FaEnvelope } from "react-icons/fa";

const Resume = (rsm) => {
  const { resume } = rsm;
  return (
    <div>
      <Row className="py-4">
        <Col md={7}>
          <h4>
            {resume.firstName || "Your firstname"} {resume.lastName}
          </h4>
          <p className="fw-bold pb-3">{resume.job}</p>
          <p>{resume.summary}</p>
        </Col>
        <Col md={4} className="offset-1">
          <p className="pb-2 text-primary">
            <FaMapPin />
            {resume.city} {resume.state}
          </p>
          <p class="text-primary">
            <FaEnvelope /> {resume.email}
          </p>
        </Col>
      </Row>
      <Row class="py-2">
        <Col md={7}>
          <h5 className="text-primary pb-2">Experience</h5>
          {resume.experiences ? (
            resume.experiences.map((experience, index) => (
              <div className="py-2" key={index}>
                <p className="fw-bold">{experience.company}</p>
                <span className="text-muted">
                  {experience.title} - {experience.type}
                </span>
                <span className="d-block pb-2">
                  {experience.startDate} - {experience.endDate}
                </span>
                <p>{experience.description}</p>
                <hr />
              </div>
            ))
          ) : (
            <p>Add some experiences</p>
          )}
        </Col>
        <Col md={4} className="offset-1">
          <h5 className="text-primary pb-2">Skills</h5>
          <ul>
            {resume.skills ? (
              resume.skills.map((skill, index) => <li key={index}>{skill}</li>)
            ) : (
              <p>add skills</p>
            )}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Resume;
