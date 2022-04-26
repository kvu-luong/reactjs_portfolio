// This is Header component /Navigation Component
import logo from "../../assets/logo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import {
  Headers,
  Logo,
  Nav,
  Button,
  HamburgerBtn,
  HamburgerWrap,
  MobileMenu,
} from "./style";

const Header = () => {
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;
    const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "1rem 2.5rem",

        borderRadius: "0 0 50px 50px",

        border: "2px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",

        borderRadius: "50px",

        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <Headers ref={ref}>
      <Logo>
        <img src={logo} alt="V2VBRO" />
        <h3>V2VBRO</h3>
      </Logo>
      <Nav>
        <a href="#home" onClick={(e) => scrollUp("home", e)}>
          HOME
        </a>
        <a href="#about" onClick={(e) => scrollUp("about", e)}>
          ABOUT
        </a>
        <a href="#services" onClick={(e) => scrollUp("services", e)}>
          SERVICES
        </a>
        <a href="#contact" onClick={(e) => scrollUp("contact", e)}>
          <Button>Contact Us</Button>
        </a>
      </Nav>
      <HamburgerWrap onClick={() => setClick(!click)} clicked={click}>
        <HamburgerBtn clicked={click}></HamburgerBtn>
      </HamburgerWrap>
      <MobileMenu clicked={click}>
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          HOME
        </a>
        <a href="#about" onClick={(e) => handleClick("about", e)}>
          ABOUT
        </a>
        <a href="#services" onClick={(e) => handleClick("services", e)}>
          SERVICES
        </a>
        <a href="#contact" onClick={(e) => handleClick("contact", e)}>
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
