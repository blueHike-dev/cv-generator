import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";

const Sidebar = ({ personalInfo }) => {
  return (
    <SidebarWrapper>
      <Photo src={personalInfo.photo} />
      <Section title="Personal Details" contrastTitle direction="column">
        <Subsection title="Address">{personalInfo.address}</Subsection>
        <Subsection title="Phone Number">{personalInfo.phoneNumber}</Subsection>
        <Subsection title="Email">{personalInfo.email}</Subsection>
      </Section>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
`;

const Photo = styled.img`
  margin-bottom: 2rem;
  width: 20rem;
  height: 20rem;
  border-radius: 4px;

  @media (max-width: 600px) {
    width: 7rem;
    height: 7rem;
  }
`;

export default Sidebar;
