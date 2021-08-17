import React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button } from "react-bootstrap";
import FormContainer from "./FormContainer";
import Resume from "./Resume";

const PreviewResume = (props) => {
  let resume = null;
  const downloadDocument = () => {
    resume.save();
  };
  return (
    <FormContainer>
      <h3>{props.title}</h3>

      <PDFExport fileName="my_resume.pdf" ref={(r) => (resume = r)}>
        <Resume resume={props.state} />
      </PDFExport>

      <div class="py-2">
        <Button className="btn-lg" onClick={downloadDocument}>
          Download Resume (PDF)
        </Button>
        <Button
          variant="dark"
          className="mx-2"
          type="button"
          onClick={props.prev}
        >
          Prev
        </Button>
      </div>
    </FormContainer>
  );
};

export default PreviewResume;
