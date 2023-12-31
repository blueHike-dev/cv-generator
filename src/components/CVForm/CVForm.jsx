import React from "react";
import styled from "styled-components";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Button from "../Utils/Button";

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onDownLoad,
  onPrint,
  onLoadExample,
  onReset,
}) => {
  return (
    <CVFormWrapper>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Experience
        experience={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <Education
        education={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
      <CVButtonWrapper>
        <Button text="Generate PDF" onClick={onPrint} primary></Button>
        <Button text="Download your CV" onClick={onDownLoad} black></Button>
        <Button text="Load Example" onClick={onLoadExample} secondary></Button>
        <Button text="Reset " onClick={onReset} red></Button>
      </CVButtonWrapper>
    </CVFormWrapper>
  );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70vw;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CVButtonWrapper = styled.button`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export default CVForm;
