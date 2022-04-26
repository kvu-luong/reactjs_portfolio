// This is ScrollToTop component, To scroll from anywhere to top

import SvgIcon from "../../assets/arrow-up.svg";
import { Up } from "./style";

const ScrollToTop = () => {

  const scrollUp = () => {
    const element = document.getElementById('home');
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    })
  }
  return (
    <Up onClick={scrollUp}>
      <img src={SvgIcon} alt="to top" />
    </Up>
  );
};

export default ScrollToTop;
