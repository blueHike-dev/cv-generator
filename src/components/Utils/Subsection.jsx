import React from "react";
import styled from "styled-components";

const SubsectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding};
`;

const Title = styled.h4`
  padding: ${(props) => props.padding};
  line-height: 1.6;
`;

const Subsection = ({ title, children, titlePadding }) => {
  return (
    <SubsectionWrapper padding={titlePadding}>
      <Title>{title}</Title>
      {children}
    </SubsectionWrapper>
  );
};

export default Subsection;
