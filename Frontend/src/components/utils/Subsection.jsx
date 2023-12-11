import React from "react";
import styled from "styled-components";

const SubsectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding};
`;

const Subsection = () => {
  return <SubsectionWrapper padding={titlePadding}></SubsectionWrapper>;
};

export default Subsection;
