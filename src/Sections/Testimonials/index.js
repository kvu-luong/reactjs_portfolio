// This is Testimonials component
import { Section, Title, Carousal } from "./style";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="CodeBucks has been essential part of our business. I would definetly
           recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-1"
          />
          
          <Card
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-2"
          />

          <Card
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-3"
          />

          <Card
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
