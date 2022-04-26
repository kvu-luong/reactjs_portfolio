import styled from 'styled-components';
export const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5rem 5px 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;

  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`;

export const Nav = styled.nav`
   {
    width: 25rem;
    max-width: 40rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only Screen and (max-width: 48em) {
      display: none;
    }

    a {
      font-weight: 600;
      color: var(--white);
      line-height: 1.5;

      &::after {
        content: "";
        display: block;
        height: 3px;
        width: 3px;
        background: transparent;
        transition: width 0.5s;
      }

      &:not(:last-child):hover::after {
        width: 100%;
        background: var(--purple);
      }
    }
  }
`;

export const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    transform: scale(0.9);
  }
`;

export const HamburgerWrap = styled.div`
  display: none;

  @media only Screen and (max-width: 48em) {
    display: block;
  }
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const HamburgerBtn = styled.span`
  display: block;
  position: relative;
  background-color: ${(props) =>
    props.clicked ? "transparent" : "var(--white)"};
  width: 2rem;
  height: 2px;
  margin-top: 1rem;
  transition: all 0.1s;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  margin: 0.5rem;
  overflow-x: hidden;

  a{
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;
