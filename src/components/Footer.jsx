import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright © 2023 blueHike</p>
      <Link href="https://github.com/simo6lues" target="_blank">
        <FaGithub />
      </Link>
      <Link href="https://github.com/simo6lues" target="_blank">
        <FaLinkedin />
      </Link>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;

const Link = styled.a`
  position: relative;
  top: 0.2rem;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.lightHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.lightActive};
  }
`;

export default Footer;
