import React from "react";
import Subsection from "../Utils/Subsection";
import styled from "styled-components";

const EducationItem = ({ educationItem }) => {
  return (
    <EducationItemWrapper>
      <Period>
        {educationItem.from} - {educationItem.to}
      </Period>
      <Info>
        <Subsection
          title={`${educationItem.universityName}, ${educationItem.city}`}>
          <p>: {educationItem.degree}</p>
          <p>: {educationItem.subject}</p>
        </Subsection>
      </Info>
    </EducationItemWrapper>
  );
};

const EducationItemWrapper = styled.div`
  display: flex;
`;
const Period = styled.div`
  width: 25%;
  font-weight: bold;
  margin-right: 2rem;
`;

const Info = styled.div`
  width: 70%;
`;

export default EducationItem;
