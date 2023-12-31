import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <h1>blueHike CV Generator</h1>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
`;

const HeaderWrapper = styled.div`
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 3rem 8rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2.2rem;

  @media (max-width: 1600px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export default Header;
