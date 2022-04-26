// This is Services component
import {
  ServiceSection,
  Background,
  Title,
  Line,
  Triangle,
  Content,
  OBJ,
} from "./style";
import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";

const Services = () => {
  return (
    <ServiceSection id="services">
      <Background>
        <Title>What We Do</Title>
        <Line />
        <Triangle />
      </Background>

      <Content>
        <TextBlock
          topic="Design"
          title={<h1>We build award winning Designs</h1>}
          subtext={
            <h5>
              We help clients to build great design to attract more customers
            </h5>
          }
        />
        <OBJ>
          <img src={Tube} alt="Tube" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Design.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Develop"
          title={<h1>We Develope high quality Web & App</h1>}
          subText={
            <h5>
              We build appropriate solution to develope your website & app with
              best tools available
            </h5>
          }
        />
        <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Develope.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Support"
          title={<h1>We provide support for your digital presence</h1>}
          subText={
            <h5>
              Once your system is online, we will stay on hand to help you use
              it and provide technical support and maintenance <br /> your
              business
            </h5>
          }
        />
        <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" />
      </Content>
    </ServiceSection>
  );
};

export default Services;
