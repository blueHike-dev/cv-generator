import React from "react";
import styled from "styled-components";

const Header = ({ personalInfo }) => {
  const { firstName, lastName, title } = personalInfo;
  return (
    <CVHeaderWrapper>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{title}</p>
    </CVHeaderWrapper>
  );
};

const CVHeaderWrapper = styled.header`
  grid-column: span 2;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
  /* font-size: 2.8rem; */

  @media (max-width: 600px) {
    font-size: 1.8rem;
    padding: 0.8rem;
  }
`;

export default Header;
