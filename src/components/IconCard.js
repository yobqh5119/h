import { IconCardStyles } from "../styles/IconCardStyles";

export default function IconCard({ text, icon }) {
  return (
    <IconCardStyles>
      <img src={icon} alt={`image of ${icon} icon`} />
      <p>{text}</p>
    </IconCardStyles>
  );
}
