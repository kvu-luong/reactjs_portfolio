// This is footer component
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";
import { FOOTER, LeftText, RightText } from "./style";

const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2021 Built and Design by{" "}
        <a href="https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA">
          @CodeBucks
        </a>
      </LeftText>
      <RightText>
        Reach out to me via 😉
        <a href="https://twitter.com/code_bucks">
          <img src={Twitter} alt="Twitter" />
        </a>
        &nbsp;
        <a href="https://www.instagram.com/code.bucks/">
          <img src={Instagram} alt="Instagram" />
        </a>
        &nbsp;
        <a href="mailto:codebucks27@gmail.com?subject=Email From Your Website">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;
