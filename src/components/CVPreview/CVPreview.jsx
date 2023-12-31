import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

//REACT-TO-PRINT PACKAGE PRINTS ONLY CLASS COMPONENTS

class CVPreview extends Component {
  render() {
    const { cv } = this.props;

    return (
      <CVPreviewWrapper>
        <Header personalInfo={cv.personalInfo} />
        <Content
          personalInfo={cv.personalInfo}
          experience={cv.experience}
          education={cv.education}
        />
        <Sidebar personalInfo={cv.personalInfo} />
      </CVPreviewWrapper>
    );
  }
}

export default CVPreview;

const CVPreviewWrapper = styled.div`
  width: 70vw;
  height: 160vh;
  position: sticky;
  top: 10px;
  display: grid;
  grid-template-columns: 45vw 25vw;
  grid-template-rows: 20vh 140vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 600px) {
    grid-template-rows: 15vh 90vh;
  }
`;
