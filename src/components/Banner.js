import React from "react";
import { BannerStyles } from "../styles/Banner";
import { CardStyles } from "../styles/CardStyles";
import Button from "./Button";

export default function Banner() {
  return (
    <BannerStyles>
      <CardStyles>
        <p className="title">Rise & Shine</p>
        <p className="description">
          Coffee cortado, qui beans galão froth to go. Blue mountain et single
          origin aged flavour variety affogato.
        </p>
        <Button text={"Learn More"} />
      </CardStyles>
    </BannerStyles>
  );
}
