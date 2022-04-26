//This is card component for Testimonials
import { CARD, Image, Text, NAME } from './style';
const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`).default;
  return (
    <CARD>
      <Image img={Avatar} width="400" height="400" />
      <Text>{text}</Text>
      <NAME>{name}</NAME>
    </CARD>
  );
};

export default Card;
