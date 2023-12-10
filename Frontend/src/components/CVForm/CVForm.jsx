import React from "react";
import Personal from "./Personal";

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onPrint,
  onLoadExample,
  onReset,
}) => {
  return (
    <CVFromWrapper>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
    </CVFromWrapper>
  );
};

export default CVForm;
