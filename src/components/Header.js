import React from "react";
import logo from "../assets/sunrise-alarm.svg";
import styled from "styled-components";

const HeaderLogo = styled.img`
  url(${logo});
  margin: 1rem 0;
`;

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <HeaderLogo src={logo} alt="logo picture" />
    </HeaderStyles>
  );
}
