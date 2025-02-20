import styled from "styled-components";

export const DarkModeButton = styled.button`
  order: 9;
  border: none;
  position: relative;
  display: flex;
  justify-content: space-between;

  width: 51px;
  height: 24px;
  padding: 5px;

  border-radius: 50px;
  background-color: #272727;

  &::before {
    content: "";

    position: absolute;
    top: 0;
    left: ${(props) => (props.active ? "27px" : "0")};

    display: block;
    width: 24px;
    height: 24px;

    border-radius: 50%;
    background-color: #fff;

    transition: left 0.2s ease-in;
  }
`;

export const DarkModeButtonIcon = styled.img`
  margin-top: -1px;
  margin-left: -1px;
  z-index: 10;
`;

export const Btn = styled.a`
  display: inline-block;
  height: 48px;
  padding: 12px 28px;

  border-radius: 5px;
  background-color: var(--accent);
  color: var(--white);
  letter-spacing: 0.15px;
  font-size: 16px;
  font-weight: 500;

  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const BtnOutline = styled.a`
  display: flex;
  column-gap: 10px;
  align-items: center;

  height: 48px;
  padding: 12px 20px;

  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;

  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
