import React from "react";
import { Steps, Step } from "react-step-builder";
import BasicInfo from "../components/BasicInfo";
import ContactInfo from "../components/ContactInfo";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import PreviewResume from "../components/PreviewResume";

const CreateScreen = () => {
  return (
    <>
      <div className="text-center my-3">
        <h2>Create your resume</h2>
      </div>
      <Steps>
        <Step title="Basic Information" component={BasicInfo} />
        <Step title="Contact Information" component={ContactInfo} />
        <Step title="Work Experience" component={WorkExperience} />
        <Step title="Skills" component={Skills} />
        <Step title="Preview Resume" component={PreviewResume} />
      </Steps>
    </>
  );
};

export default CreateScreen;
