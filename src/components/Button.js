import React from "react";
import { ButtonStyles } from "../styles/ButtonStyles";

export default function Button({ text }) {
  const handleBtnClick = () => {
    console.log("Learn more clicked");
  };

  return (
    <ButtonStyles onClick={handleBtnClick}>{text.toUpperCase()}</ButtonStyles>
  );
}
