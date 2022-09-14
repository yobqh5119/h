import React from "react";
import IconCard from "./IconCard";
import styled from "styled-components";
import alarmImg from "../assets/sunrise-alarm.svg";
import heartIcon from "../assets/sunshine-heart-icon.svg";
import wavyLines from "../assets/wavy-lines-icon.svg";

const InfoStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
  grid-column-gap: 20px;
  padding: 20px;
`;

const Title = styled.h3`
  color: #13294b;
  text-align: center;
  margin-top: 2rem;
  font-weight: 500;
`;

export default function Info() {
  const iconItems = [
    { text: "Text", icon: wavyLines },
    { text: "Text", icon: heartIcon },
    { text: "Text", icon: alarmImg },
  ];

  return (
    <>
      <Title>Your heading here</Title>
      <InfoStyles>
        {iconItems.map((iconItem, index) => (
          <IconCard key={index} text={iconItem.text} icon={iconItem.icon} />
        ))}
      </InfoStyles>
    </>
  );
}
