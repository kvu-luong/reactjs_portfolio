import styled from 'styled-components';

export const Up = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  position: fixed;
  right: 100px;
  bottom: 80px;
  z-index: 10;
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media screen and (max-width: 48em) {
    display: none;
  }
  img {
    width: 3rem;
    height: 3rem;
    border: 2px solid var(--white);
    border-radius: 50%;
    background-color: var(--white);
    transition: transform 0.3s;
    // display: none;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;